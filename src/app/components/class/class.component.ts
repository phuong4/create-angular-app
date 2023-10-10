import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.sass']
})
export class ClassComponent implements OnInit{
  classes: any[] = [];
  number: any[] = [];

  isUpdate: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  newClass(){
    this.isUpdate = false;
  }

  selectItem(item: any){
    this.isUpdate = true;
  }
}
