import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getLocalData(): person[]{
    return [{name: "Anna",age: 30, city: "Singapore"},
    {name:"Bob",age:28,city:"New York"},
    {name:"Catherine",age:22,city:"Tokyo"}];
  }
  
}
