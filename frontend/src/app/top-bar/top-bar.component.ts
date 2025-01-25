import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { Book } from '../book';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  template: `
    <div class="top-bar-container">
      <form class="filter-container" [formGroup]="form">
        <mat-form-field>
          <mat-label>Search</mat-label>
          <input formControlName="search" matInput>
        </mat-form-field>
        <mat-form-field>
        <mat-label>Cover</mat-label>
          <mat-select formControlName="cover">
            <mat-option value="none">-</mat-option>
            <mat-option value="hard">Hard</mat-option>
            <mat-option value="soft">Soft</mat-option>
          </mat-select>
        </mat-form-field>
      </form>
      <a mat-fab extended routerLink="." (click)="addBook()">
        <mat-icon>add</mat-icon>
        Add
      </a>
    </div>

  `,
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  addBook() {
    const dialogRef = this.dialog.open<Book | null>(BookDialogComponent, {
      data: {id: null},
    });

    dialogRef.closed.subscribe(result => {
      console.log('The add dialog was closed', result);
      this.addAction.emit(result!)
    });
    
  }

  ngOnInit(): void {
    this.form.controls.cover.valueChanges.subscribe((x) =>{
      this.coverChange.emit(x)
    })
    this.form.controls.search.valueChanges.subscribe((x) =>{
      this.searchChange.emit(this.form.controls.search.value)
    })
  }
  
  dialog = inject(Dialog);
  private formBuilder = inject(NonNullableFormBuilder);

  form: TopBarFilter = this.formBuilder.group({
    search: this.formBuilder.control<string>(""),
    cover: this.formBuilder.control<CoverType>("none")
  })

  @Output() coverChange = new EventEmitter<CoverType>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() addAction = new EventEmitter<Book>();
}

export type CoverType = "none" | "soft" | "hard"
export type TopBarFilter = FormGroup<{
  search: FormControl<string>;
  cover: FormControl<CoverType>
}>
