import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-dialog',
  standalone: false,

  template: `
  <div class="mine-dialog">
    <h2>{{action}} book</h2>

    <mat-form-field class="dialog-form-field">
      <mat-label>Title</mat-label>
        <input [(ngModel)]="title" matInput>
    </mat-form-field>

    <mat-form-field class="dialog-form-field">
      <mat-label>Author</mat-label>
        <input [(ngModel)]="author" matInput>
    </mat-form-field>
      
    <mat-form-field class="dialog-form-field">
      <mat-label>Pages</mat-label>
        <input [(ngModel)]="pages" matInput type="number">
    </mat-form-field>
      
    <mat-form-field class="dialog-form-field">
      <mat-label>Release Year</mat-label>
        <input [(ngModel)]="releaseYear" matInput type="number">
    </mat-form-field>

    <mat-form-field class="dialog-form-field">
      <mat-label>Cover</mat-label>
        <mat-select [(ngModel)]="cover">
          <mat-option value="none">-</mat-option>
          <mat-option value="hard">Hard</mat-option>
          <mat-option value="soft">Soft</mat-option>
        </mat-select>
      </mat-form-field>

      <a mat-fab extended routerLink="." (click)="addBook()">
          <mat-icon>add</mat-icon>
          {{actionButton}}
        </a>
  </div>
  
  `,
  styleUrl: './book-dialog.component.scss'
})
export class BookDialogComponent implements OnInit {
  title: string = "";
  cover: string = "none";
  pages: number = 0;
  author: string = "";
  releaseYear: number = 2000;

  action: string = "";
  actionButton: string = "";

  addBook() {
    const book: Book = {
      id: 0,
      author: this.author,
      cover: this.cover === "hard" ? "hard" : "soft",
      pages: this.pages,
      releaseYear: this.releaseYear,
      title: this.title
    };
    
    if (this.actionButton === "Add"){
      this.bookService.addBook$(book).subscribe(x => {
        console.log('sub')
        this.dialogRef.close(book)
      });
    }
    else {
      this.bookService.editBook$(this.data.id, book).subscribe(x => {
        console.log('edit sub')
        this.dialogRef.close(book)
      });
    }
    
  }

  ngOnInit(): void {
    if (this.data.id != null) {
      this.action = "Editing existing";
      this.actionButton = "Edit"
      this.bookService.getBooksById$(this.data.id)
        .subscribe((v) => {
          this.title = v.title
          this.author = v.author
          this.cover = v.cover
          this.releaseYear = v.releaseYear;
          this.pages = v.pages
        })
    } else {
      this.action = "Adding new";
      this.actionButton = "Add"
    }
  }
  dialogRef = inject<DialogRef<Book | null>>(DialogRef<Book | null>);
  data = inject(DIALOG_DATA);
  bookService = inject(BooksService);
}
