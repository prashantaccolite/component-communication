import { Injectable } from '@angular/core';
import { Subject } from "rxjs"
import { VendorModel } from './vendor-model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  public blockVendor=new Subject<VendorModel>();

  sendBlockVendor(v:VendorModel){
    this.blockVendor.next(v);
  }

  moveFromActiveToBlocked(vendor:VendorModel){
    // console.log("--------------");
    let index=this.vendors.indexOf(vendor);
    this.vendors.splice(index,1);
    this.blockedVendors.push(vendor);
  }

  moveFromBlockedToActive(vendor:VendorModel){
    let index=this.blockedVendors.indexOf(vendor);
    this.blockedVendors.splice(index,1);
    this.vendors.push(vendor);
  }

  //blockVendors$ = new Subject<VendorModel>()

  vendors:VendorModel[]=[
    {
      name:"Yousha",
      age:22,
      city:"Mumbai" 
    },
    {
      name:"Kavita",
      age:23,
      city:"Delhi" 
    },
    {
      name:"Prantik",
      age:24,
      city:"Kolkata" 
    }
  ]

  blockedVendors:VendorModel[]=[];

  constructor() { 
    //this.blockVendors$.next(vendor:VendorModel)
  }
}
