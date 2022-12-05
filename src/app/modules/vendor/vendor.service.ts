import { Injectable } from '@angular/core';
import { Vendor } from './vendor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorobs = new Subject<any>();

  constructor() { }

  activeVendors: Vendor[] = [
    { id: 1, name: 'Prina', age: 22, city: 'Mumbai'},
    { id: 2, name: 'Krisha', age: 21, city: 'Delhi'},
    { id: 3, name: 'Stuti', age: 23, city: 'Jaipur'},
    { id: 4, name: 'Krish', age: 24, city: 'Thane'},
    { id: 5, name: 'Stits', age: 26, city: 'Mulund'},
    { id: 6, name: 'Pri', age: 20, city: 'Nagpur'}
  ];

  blockedVendors: Vendor[] = [];

  getActiveVendors(){
    return this.activeVendors;
  }

  setActiveVendors(activeVendors:Vendor[]){
    this.activeVendors = activeVendors;
  }

  getBlockedVendors(){
    return this.blockedVendors;
  }

  setBlockedVendors(blockedVendor:Vendor){
    this.blockedVendors.push(blockedVendor);
    this.setActiveVendors(this.activeVendors.filter( activeVendor => activeVendor.id != blockedVendor.id));
    console.log("settt");
    console.log(this.activeVendors);
  }

}
