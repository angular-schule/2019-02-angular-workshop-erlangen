import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import Plotly from 'plotly.js';
import Plotly from 'plotly.js-basic-dist';

@Component({
  selector: 'br-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  @ViewChild('myDiv')
  myDiv: ElementRef;

  get time() {
    return new Date().getSeconds();
  }

  constructor(private ngZone: NgZone) {

  }

  ngOnInit() {

    const myDivEl = this.myDiv.nativeElement;

    const data = [{
      values: [66, 22, 12],
      labels: ['Angular', 'React', 'Vue'],
      type: 'pie'
    }];

    const layout = {
      title: 'Top 3 Most Popular SPA Frameworks in 2019',
      height: 400,
      width: 500
    };

    this.ngZone.runOutsideAngular(() => {
      Plotly.newPlot(myDivEl, data, layout);

      this.ngZone.run(() => {
        // runs inside ngZones
      });
    });

  }

}
