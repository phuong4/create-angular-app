import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as Highcharts from "highcharts";

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  classes: any[] = [];
  number: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  drawCards(data: any) {
    console.log(data);
    data.forEach((element: any) => {
      this.classes.push(element.class);
      this.number.push(element.number);
    });

    const columnTitles = data.map((element: any) => element.name);

    this.chartOptions = {
      xAxis: {
        categories: ['Tin học đại cương']
        // categories: columnTitles
      },
      series: [
        {
          name: 'Classes',
          // data: this.number
          data: [220,500]

        },
      ],
      chart: {
        type: 'bar'
      },
    };
  }

  navigateToNewPage() {
    this.router.navigate(['']);
  }
}
