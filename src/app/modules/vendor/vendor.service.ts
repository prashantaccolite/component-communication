import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor() { }

  public sendDetail = new Subject<Vendor>()
  vendors : Vendor[] = [
    { name : "Prantik", age: "22", city : "Pune"},
    { name : "Viral", age: "22", city : "Surat"},
    { name : "Manish", age: "22", city : "Pune"}
  ]

  blockedVendors : Vendor[] = [];
  sendBlockedVendorDetails(vendor : Vendor){
      this.sendDetail.next(vendor)
      console.log(this.blockedVendors.entries.name+"----------")
      let index=this.vendors.indexOf(vendor);
      this.vendors.splice(index,1);
      this.blockedVendors.push(vendor);
  }

  sendUnBlockedtoParents(unBlockedVendor : Vendor){
    let index=this.blockedVendors.indexOf(unBlockedVendor);
    this.blockedVendors.splice(index,1);
    this.vendors.push(unBlockedVendor);
  }
}
