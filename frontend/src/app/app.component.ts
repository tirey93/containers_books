import { Component, inject, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';
import { Dialog } from '@angular/cdk/dialog';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { Observable } from 'rxjs';
import { CoverType } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  handleAdd(e: Book) {
    console.log("handleAdd", e)
    this.books$ = this.bookService.getBooks$();
  }

  handleSearch(search: string) {
    console.log(search)
    if (search.length > 0) {
      this.books$ = this.bookService.getSearchBooks$(search, this.coverType);
    } else {
      this.books$ = this.bookService.getBooks$();
    }
  }

  handleCover(cover: CoverType) {
    this.coverType = cover;
    if (cover === "none") {
      this.books$ = this.bookService.getBooks$();
      return;
    }
    this.books$ = this.bookService.getBooksByCover$(cover);
  }

  editRow(book: Book) {
    const dialogRef = this.dialog.open<Book | null>(BookDialogComponent, {
      data: { id: book.id },
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed', result);
      this.books$ = this.bookService.getBooks$()
    });
  }

  deleteRow(book: Book) {
    this.bookService.deleteBook$(book.id).subscribe(x => {
      this.books$ =this.bookService.getBooks$();
    })
  }
  books$: Observable<Book[]>;
  coverType: CoverType = "none"
  displayedColumns: string[] = ['title', 'author', 'pages', 'releaseYear', 'cover', 'actions'];

  dialog = inject(Dialog);
  constructor(private bookService: BooksService) {
    this.books$ = this.bookService.getBooks$();
   }

}
