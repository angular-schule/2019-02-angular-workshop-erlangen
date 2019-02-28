import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, tap, reduce, scan } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('isbn'))
      )
      .subscribe(isbn => this.isbn = isbn);

      ////////////
      // import { of, from } from 'rxjs';

      const observer = {
        next: e => console.log(e),
        error: e => console.error(e),
        complete: () => console.log('Complete')
      };

      const myObservable$ = new Observable<number>(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);

        setTimeout(() => subscriber.next(4), 1000);
        setTimeout(() => subscriber.next(5), 2000);

        setTimeout(() => subscriber.complete(), 2000);
      });

      // Subscription: Vertrag zw. Observer und Observable
      const subscription = myObservable$
        .pipe(
          map(x => x * 10),
          filter(x => x > 20),
          scan((acc, item) => acc + item, 0)
        )
        .subscribe(observer);

      setTimeout(() => subscription.unsubscribe(), 2000);


  }

}
