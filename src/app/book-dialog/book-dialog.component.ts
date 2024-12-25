import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-dialog',
  standalone: false,
  
  template: `
  <h2>Creating new book</h2>

  <mat-form-field>
    <mat-label>Title</mat-label>
      <input [(ngModel)]="title" matInput>
  </mat-form-field>
  
  <mat-form-field>
    <mat-label>Author</mat-label>
      <input [(ngModel)]="author" matInput>
  </mat-form-field>
    
  <mat-form-field>
    <mat-label>Pages</mat-label>
      <input [(ngModel)]="pages" matInput type="number">
  </mat-form-field>
    
  <mat-form-field>
    <mat-label>Release Year</mat-label>
      <input [(ngModel)]="releaseYear" matInput type="number">
  </mat-form-field>

  <mat-form-field>
    <mat-label>Cover</mat-label>
      <mat-select [(ngModel)]="cover">
        <mat-option value="none">-</mat-option>
        <mat-option value="hard">Hard</mat-option>
        <mat-option value="soft">Soft</mat-option>
      </mat-select>
    </mat-form-field>

    <a mat-fab extended routerLink="." (click)="addBook()">
        <mat-icon>add</mat-icon>
        Add
      </a>
  `,
  styleUrl: './book-dialog.component.scss'
})
export class BookDialogComponent implements OnInit{
title: string = "";
cover: string = "none";
pages: number = 0;
author: string = "";
releaseYear: number = 2000;
  addBook() {
    this.dialogRef.close({
      id: 0,
      author: this.author,
      cover: this.cover  === "hard" ? "hard": "soft",
      pages: this.pages,
      releaseYear: this.releaseYear,
      title: this.title
    })
  }

  ngOnInit(): void {
    if(this.data.id != null){
      this.bookService.getBooksById$(this.data.id)
      .subscribe((v) => {
        console.log("subscibe", v)
        this.title = v[0].title
      
      })
    }else{
      console.log("no id")
    }
  }
  dialogRef = inject<DialogRef<Book | null>>(DialogRef<Book | null>);
  data = inject(DIALOG_DATA);
  bookService = inject(BooksService);
}
