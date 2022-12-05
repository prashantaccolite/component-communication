import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorInputService {

  constructor() { }
  private array=[
    {name:"Keerthi",age:21,city:"Cuddalore"},
    {name:"Mukil",age:22,city:"Madurai"},
    {name:"Mano",age:22,city:"Sivagangai"},
    {name:"Syed",age:21,city:"Chennai"}
  ]
  getArray(){
    return this.array;
  }
  source=new Subject<Vendor>();
  v?:Vendor
  send(v:Vendor){
    this.v=v
    this.source.next(v);
  }
}
