import { Injectable } from '@angular/core';
import { VendorModel } from './IVendor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
  vendorObservable=new Subject<VendorModel>();
  blockedVendor:VendorModel= {name:"",age:0,city:""};
  constructor() { }
  setBlockedVendor(vendor:VendorModel)
  {
    this.blockedVendor=vendor;
    this.vendorObservable.next(this.blockedVendor);
  }
}
