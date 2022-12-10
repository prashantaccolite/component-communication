import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Vendors } from './vendors';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  public blockSubject=new Subject<Vendors>();
  //public unBlockSubject=new Subject<Vendors>();


  constructor() { }

  blockedVendorsArr:Vendors[]=[];


  sendToBlock(data :Vendors)
  {
    //this.blockSubject.next(data);
    let index=this.activeVendors.indexOf(data);
    this.activeVendors.splice(index,1);
    this.blockedVendorsArr.push(data);
  }
  sendToUnblock(unBlocked: Vendors)
  {
    //this.unBlockSubject.next(unBlocked);
    let index=this.blockedVendorsArr.indexOf(unBlocked);
    console.log(unBlocked);
    this.blockedVendorsArr.splice(index,1);
    this.activeVendors.push(unBlocked);


  }

  activeVendors: Vendors[]=[
    {name:"Avi", age:20,city:"Lucknow"},
    {name:"Avirup", age:22,city:"Kolkata"},
    {name:"Avinash", age:23,city:"Srinagar"},
    {name:"Gru", age:26,city:"Surat"},
    {name:"Brown", age:29,city:"Nagpur"}
    
  ]


  getVendors()
  {
    return this.activeVendors;
  }

}
