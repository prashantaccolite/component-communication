import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassToBlockService {

  constructor() { }

  name= "AAA";
  age= "AAA";
  city= "AAA";

  getName(){
    return this.name;
  }
  
  setName(name: string){
    this.name = name;
  }

  getAge(){
    return this.age;
  }
  
  setAge(age: string){
    this.age = age;
  }

  getCity(){
    return this.city;
  }
  
  setCity(city: string){
    this.city = city;
  }
}
