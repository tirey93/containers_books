import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = 'http://localhost:5241';
  constructor(private http: HttpClient) { }

  getBooks$(): Observable<Book[]>{
    console.log("url", this.url)
    return this.http.get<Book[]>(`${this.url}/api/Books`)
  }

  getBooksByCover$(cover:string): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.url}/books?cover=${cover}`)
  }

  getBooksById$(id: number): Observable<Book[]>{
    console.log("getBooksById", id)
    return this.http.get<Book[]>(`${this.url}/books?id=${id}`)
  }
}
