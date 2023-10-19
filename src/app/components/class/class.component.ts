import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
import { ClassModel } from 'src/app/model/class-model';
import { ClassService } from 'src/app/service/class.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.sass']
})
export class ClassComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  classes: any[] = [];
  number: any[] = [];

  listClasses: ClassModel [] = [];
  formClass: FormGroup = new FormGroup({});
  isUpdate: boolean = false;

  constructor(
              private router: Router,
              private classService: ClassService
             ) {}

  ngOnInit(): void {
    this.list();
    this.formClass = new FormGroup({
      id_class: new FormControl(''),
      name: new FormControl(''),
      number: new FormControl(''),
      room: new FormControl(''),
      status: new FormControl('1')
    });
    this.getClasses();
  }

  list(){
    this.classService.getClasses().subscribe(resp=>{
      if(resp){
        this.listClasses = resp;
      }
    });
  }

  save(){
    this.formClass.controls['status'].setValue('1');
    this.classService.saveClass(this.formClass.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formClass.reset();
      }
    });
  }

  update(){
    this.classService.updateClass(this.formClass.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formClass.reset();
      }
    });
  }

  delete(id: any){
    this.classService.deleteClass(id).subscribe(resp=>{
      if(resp){
        this.list();
      }
    });
  }

  newClass(){
    this.isUpdate = false;
    this.formClass.reset();
  }

  selectItem(item: any){
    this.isUpdate = true;
    this.formClass.controls['id_class'].setValue(item.id_class);
    this.formClass.controls['name'].setValue(item.name);
    this.formClass.controls['number'].setValue(item.number);
    this.formClass.controls['room'].setValue(item.room);
  }

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
        // categories: this.cards
        categories: columnTitles
      },
      series: [
        {
          name: 'Classes',
          data: this.number
        },
      ],
      chart: {
        type: 'bar'
      },
    };
  }

  navigateToNewPage() {
    this.router.navigate(['/chart']);
  }
}
