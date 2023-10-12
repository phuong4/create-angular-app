import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.sass']
})
export class ClassComponent implements OnInit{
  classes: any[] = [];
  number: any[] = [];

  isUpdate: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  newClass(){
    this.isUpdate = false;
  }

  selectItem(item: any){
    this.isUpdate = true;
  }

  navigateToNewPage() {
    this.router.navigate(['/chart']);
  }
}
