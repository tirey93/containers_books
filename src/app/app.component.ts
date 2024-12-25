import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="table-container">

    <div class="top-bar-container">
      <div class="filter-container">
        <mat-form-field>
          <mat-label>Input</mat-label>
          <input matInput>
        </mat-form-field>
        <mat-form-field>
        <mat-label>Select</mat-label>
          <mat-select>
            <mat-option value="one">First option</mat-option>
            <mat-option value="two">Second option</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <a mat-fab extended routerLink=".">
        <mat-icon>add</mat-icon>
        Add
      </a>
    </div>
    
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

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef> Actions </th>
        <td mat-cell *matCellDef="let element">
             <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Actions">
                <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editRow(element)">
                    <mat-icon>edit</mat-icon>
                    <span>Edit</span>
                </button>
                 <button mat-menu-item>
                    <mat-icon>delete</mat-icon>
                    <span>Delete</span>
                </button>
            </mat-menu>
        </td>
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
