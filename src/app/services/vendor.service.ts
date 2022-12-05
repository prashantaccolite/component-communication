import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface address{
  street:string,
  suite:string,
  city:string,
  zipcode:string
  geo:{ lat:number,
        lng:number }
}
export interface user{
  name:string,
  id:number,
  city:string,
  username:string,
  address:address,
  email:string
  phone:string,
  website:string,
  company: {
      name:string,
      catchPhrase:string,
      bs:string }
}

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  
}
