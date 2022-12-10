import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { Vendors } from 'src/app/vendors';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

 // public vendor !: Vendors[];

  constructor(private _vendorService: VendorServiceService) { }

  ngOnInit(): void {
   // this.vendor=this._vendorService.getVendors();
  }
//    vendor: Vendors[]= [{name:"Avi", age:20,city:"Lucknow"},
// {name:"Avirup", age:22,city:"Kolkata"},
// {name:"Avinash", age:23,city:"Srinagar"},
// {name:"Gru", age:26,city:"Surat"},
// {name:"Brown", age:29,city:"Nagpur"}
// ]


//vendor=this._vendorService.getVendors();
vendor=this._vendorService.activeVendors;
blockedVendorList= this._vendorService.blockedVendorsArr;

recVendor ?: Vendors ;
receivedVendor(vendor : Vendors)
{
  this.recVendor = vendor
}


}
