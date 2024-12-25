import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';
import { TopBarFilter } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

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
    console.log(book.id)
  }
  books: Book[] = []
  displayedColumns: string[] = ['title', 'author', 'pages', 'releaseYear', 'cover', 'actions'];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks$()
      .subscribe((v) => this.books = v)
  }
}
