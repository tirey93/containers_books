import { Component, inject, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';
import { TopBarFilter } from './top-bar/top-bar.component';
import { Dialog } from '@angular/cdk/dialog';
import { BookDialogComponent } from './book-dialog/book-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  handleAdd(e: Book) {
    console.log("handleAdd", e)
    this.bookService.getBooks$()
      .subscribe((v) => this.books = v)
  }

  handleSearch(search: string) {
    console.log(search)
    if (search.length > 0) {
      this.bookService.getSearchBooks$(search).subscribe(x => {
        console.log(x.length);
        this.books = x
      })
    } else {
      this.bookService.getBooks$()
      .subscribe((v) => this.books = v)
    }
  }

  handleCover(cover: string) {
    if (cover === "none") {
      this.ngOnInit()
      return;
    }
    this.bookService.getBooksByCover$(cover)
      .subscribe((v) => this.books = v)
  }

  editRow(book: Book) {
    const dialogRef = this.dialog.open<Book | null>(BookDialogComponent, {
      data: { id: book.id },
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed', result);
      this.bookService.getBooks$()
        .subscribe((v) => this.books = v)
    });
  }

  deleteRow(book: Book) {
    this.bookService.deleteBook$(book.id).subscribe(x => {
      this.bookService.getBooks$()
        .subscribe((v) => this.books = v)
    })
  }
  books: Book[] = []
  displayedColumns: string[] = ['title', 'author', 'pages', 'releaseYear', 'cover', 'actions'];

  dialog = inject(Dialog);
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks$()
      .subscribe((v) => this.books = v)
  }

}
