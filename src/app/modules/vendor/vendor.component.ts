import { Component, OnInit } from '@angular/core';

export interface person{
  name:string,
  age:number,
  city:string
}

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  people:person[] = [{name: "Anna",age: 30, city: "Singapore"},
  {name:"Bob",age:28,city:"New York"},
  {name:"Catherine",age:22,city:"Tokyo"}];
  
  chosen!:person;

  constructor() {
   }

  ngOnInit(): void {
  }

  onSelect(p: person) {
    this.chosen = p;
  }



}
