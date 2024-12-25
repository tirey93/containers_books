import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="table-container">
    <table mat-table [dataSource]="books">

      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef> Title </th>
        <td mat-cell *matCellDef="let element"> {{element.title}} </td>
      </ng-container>

      <ng-container matColumnDef="author">
        <th mat-header-cell *matHeaderCellDef> Author </th>
        <td mat-cell *matCellDef="let element"> {{element.author}} </td>
      </ng-container>

      <ng-container matColumnDef="pages">
        <th mat-header-cell *matHeaderCellDef> Pages </th>
        <td mat-cell *matCellDef="let element"> {{element.pages}} </td>
      </ng-container>

      <ng-container matColumnDef="releaseYear">
        <th mat-header-cell *matHeaderCellDef> Release Year </th>
        <td mat-cell *matCellDef="let element"> {{element.releaseYear}} </td>
      </ng-container>

      <ng-container matColumnDef="cover">
        <th mat-header-cell *matHeaderCellDef> Cover </th>
        <td mat-cell *matCellDef="let element"> {{element.cover}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>


    `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  books: Book[] = []
  displayedColumns: string[] = ['title', 'author', 'pages', 'releaseYear', 'cover'];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks$()
      .subscribe((v) => this.books = v)
  }
}
