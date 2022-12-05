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

  sendBlockedVendorDetails(vendor : Vendor){
      this.sendDetail.next(vendor)
  }
}
