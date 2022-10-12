import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as account from 'accounts.json';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  title = 'Coding-Challenge-Chart';

  array: any = (account as any).default;
  
  jsonDate = this.array[0].balanceMonthly[1].date;
  jsonValue = this.array[0].balanceMonthly[1].balance;

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    xAxis: {
      categories: [this.jsonDate]
    },
    yAxis: {
      categories: [this.jsonValue]
    },
    series: [{
      name: 'Grafische Darstellung',
      data: [1, 2, 3],
      type: 'line',

    }]
  }; // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } 
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  constructor() { }

  ngOnInit() {
    console.log(this.array[0]);
    // this.jsonDate.push(this.chartOptions.xAxis)
  }

}
