import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  template: `
    <div class="top-bar-container">
      <div class="filter-container">
        <mat-form-field>
          <mat-label>Search</mat-label>
          <input matInput>
        </mat-form-field>
        <mat-form-field>
        <mat-label>Select</mat-label>
          <mat-select (selectionChange)="handleCover($event)">
            <mat-option value="none">-</mat-option>
            <mat-option value="hard">Hard</mat-option>
            <mat-option value="soft">Soft</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <a mat-fab extended routerLink=".">
        <mat-icon>add</mat-icon>
        Add
      </a>
    </div>

  `,
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  @Output() topBarCoverChange = new EventEmitter<string>();

  handleCover(e: MatSelectChange) {
    this.topBarCoverChange.emit(e.value)
  }

}
