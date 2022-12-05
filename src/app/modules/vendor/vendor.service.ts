import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendorSubject = new Subject<any>();
  vendors = [{name: "abc", age: 28, city: "Surat"}, {name: "xyz", age: 21, city: "Bangaluru"}, {name: "pqr", age: 25, city: "Mumbai"}];
  constructor(){}
  sendBlockedVendor(data:any){
    this.vendorSubject.next(data);
  }
}
