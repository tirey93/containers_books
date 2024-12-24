import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getBooks$(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.url}/books`)
  }
}
