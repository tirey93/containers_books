import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  handleCover(e: string) {
    console.log("app", e)
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
