import { Component, OnInit } from '@angular/core';

export interface person{
  name:string,
  age:number,
  city:string
}
export interface user{
  id:number,
  name:string,
  username:string,
  email:string,
  address: {
      street:string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
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
  
  chosen!:user;

  constructor() {
   }

  ngOnInit(): void {
  }

  onSelect(p: user) {
    this.chosen = p;
  }



}
