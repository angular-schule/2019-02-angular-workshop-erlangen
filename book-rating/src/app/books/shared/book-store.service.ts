import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get<Book[]>('https://api.angular.schule/books');
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get<Book>('https://api.angular.schule/books/' + isbn);
  }
}
