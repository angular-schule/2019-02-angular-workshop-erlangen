import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { of, from } from 'rxjs';


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

      // Callbacks
      from([1, 2, 3])
        .subscribe(
          e => console.log(e),
          e => console.error(e),
          () => console.log('Complete')
        );


  }

}
