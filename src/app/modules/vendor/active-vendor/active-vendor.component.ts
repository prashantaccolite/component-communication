import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input() details!: user;

  constructor() { }

  ngOnInit(): void {
    this.details = {id:0,
    name:"",
    username:"",
    email:"string",
    address: {
        street:"string",
        suite: "string",
        city: "string",
        zipcode: "string",
        geo: {
          lat: 0,
          lng: 0
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }};
  }

}
