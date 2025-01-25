import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = 'http://localhost:5241/api';
  constructor(private http: HttpClient) { }

  getBooks$(): Observable<Book[]>{
    console.log("url", this.url)
    return this.http.get<Book[]>(`${this.url}/Books`)
  }

  getSearchBooks$(query: string, cover: string): Observable<Book[]>{
    console.log("url", this.url)
    return this.http.get<Book[]>(`${this.url}/Books/search/${query}?cover=${cover}`)
  }

  getBooksByCover$(cover:string): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.url}/books?cover=${cover}`)
  }

  getBooksById$(id: number): Observable<Book>{
    console.log("getBooksById", id)
    return this.http.get<Book>(`${this.url}/books/${id}`)
  }

  addBook$(book: Book) {
    console.log("addbook")
    return this.http.post<Book>(`${this.url}/Books`, book )
  }
  editBook$(id: number, book: Book) {
    console.log("addbook")
    return this.http.put<Book>(`${this.url}/Books/${id}`, book )
  }

  deleteBook$(id: number) {
    console.log("addbook")
    return this.http.delete(`${this.url}/Books/${id}`)
  }
}
