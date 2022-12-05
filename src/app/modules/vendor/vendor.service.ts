import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService{
  vendorSubject = new Subject<any>();
  vendors = [
    {name: "Viral", age: 21, city: "Bangaluru"}, 
    {name: "Prantik", age: 22, city: "Kolakata"}, 
    {name: "Yousha", age: 22, city: "Mumbai"},
    {name: "Kavita", age: 22, city: "Delhi"},
    {name: "Manish", age: 22, city: "Haryana"}
  ];
  constructor(){}
  sendBlockedVendor(data:any){
    this.vendorSubject.next(data);
  }
  userBlocked : any = [];
  unblockToBlock(ven:any){
    this.userBlocked.push(ven);
    let index=this.vendors.indexOf(ven);
    this.vendors.splice(index,1);
    console.log(this.vendors);
  }

  // blockToUnblock(ven:any){
    
  // }
}