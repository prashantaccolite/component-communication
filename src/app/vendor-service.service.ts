import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VendorComponent } from './modules/vendor/vendor.component';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
  Vendors = [{name:"Prantik",age:"22",city:"Kolkata"},
                      {name:"Kavita",age:"24",city:"Delhi"},
                      {name:"Viral",age:"23",city:"Bangalore"},
                      {name:"Yousha",age:"25",city:"Mumbai"}];
  constructor() { }

  public blockVendor=new Subject<any>();
  sendBlockVendor(vendor:any){
    this.blockVendor.next(vendor);
  }

  
 
  }
  

