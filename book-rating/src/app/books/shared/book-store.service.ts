import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { catchError, retry } from 'rxjs/operators';

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
      .get<Book>('https://api.angular.schule/books/' + isbn + '/slow')
      .pipe(
        retry(5),
        catchError((err: HttpErrorResponse) => of({
          isbn: err.url,
          title: 'Es ist ein Fehler aufgetreten!',
          description: 'Es ist ein Fehler aufgetreten!' + err.name,
          rating: 1,
          price: 0,
          thumbnails: []
        })));
  }
}
