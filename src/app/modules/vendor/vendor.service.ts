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

  constructor() { 
    //this.blockVendors$.next(vendor:VendorModel)
  }
}
