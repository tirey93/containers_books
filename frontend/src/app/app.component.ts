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
  }

  handleBar(filter: TopBarFilter) {
    console.log("handleBar1", filter.getRawValue())
    this.handleCover(filter.getRawValue().cover)
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
      width: '250px',
      data: {id: book.id},
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed', result);
    });
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
