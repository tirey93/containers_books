import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  template: `
    <div class="top-bar-container">
      <form class="filter-container" [formGroup]="form">
        <mat-form-field>
          <mat-label>Search1</mat-label>
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
      <a mat-fab extended routerLink=".">
        <mat-icon>add</mat-icon>
        Add
      </a>
    </div>

  `,
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() =>{
      this.topBarChange.emit(this.form)
    })
  }

  private formBuilder = inject(NonNullableFormBuilder);

  form: TopBarFilter = this.formBuilder.group({
    search: this.formBuilder.control<string>(""),
    cover: this.formBuilder.control<CoverType>("none")
  })

  @Output() topBarChange = new EventEmitter<TopBarFilter>();
}

type CoverType = "none" | "soft" | "hard"
export type TopBarFilter = FormGroup<{
  search: FormControl<string>;
  cover: FormControl<CoverType>
}>
