import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="table-container">
    <table mat-table [dataSource]="books">

        <!-- Position Column -->
      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.title}} </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.author}} </td>
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
  displayedColumns: string[] = ['position', 'name'];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks$()
      .subscribe((v) => this.books = v)
  }
}
