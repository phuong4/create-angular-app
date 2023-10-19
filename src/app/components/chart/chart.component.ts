import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ClassModel } from 'src/app/model/class-model';
import { ClassService } from 'src/app/service/class.service';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  classes: any[] = [];
  number: any[] = [];

  // listClasses: ClassModel [] = [];

  constructor(
              private router: Router,
              private classService: ClassService
             ) {}

  ngOnInit(): void {
    // this.list();
    this.getClasses();
  }

  // list(){
  //   this.classService.getClasses().subscribe(resp=>{
  //     if(resp){
  //       this.listClasses = resp;
  //     }
  //   });
  // }

  getClasses() {
    this.classService.getClasses().subscribe((data: any) => {
      this.drawClasses(data);
    });
  }

  drawClasses(data: any) {
    console.log(data);
    data.forEach((element: any) => {
      this.classes.push(element.class);
      this.number.push(element.number);
    });

    const columnTitles = data.map((element: any) => element.name);

    this.chartOptions = {
      xAxis: {
        // categories: ['Tin học đại cương']
        categories: columnTitles
      },
      series: [
        {
          name: 'Number',
          data: this.number
          // data: [220,500]
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
