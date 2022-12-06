import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorDataService {

  vendorObservable = new Subject<Vendor>();

  addBlockedVendor(vendor: Vendor) {
    this.vendorObservable.next(vendor);
  }

  vendor : Vendor[] = [
    {name : "Stuti", age : 21,city : "Navi Mumbai",isBlocked : false},
    {name : "Krisha", age : 22,city : "Mumbai",isBlocked : false},
    {name : "Prina", age : 22,city : "Mumbai",isBlocked : false},
    
  ]
  constructor() { }
}
