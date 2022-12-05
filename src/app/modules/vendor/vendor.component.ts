import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { VendorModel } from './vendor-model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  blockedVendor?:VendorModel;

  recieveBlockVendorData(vendor:VendorModel){
    this.blockedVendor=vendor;
    
  }

  constructor(private vendorService:VendorService) { }

  vendorList=this.vendorService.vendors;

  blockedVendorList=this.vendorService.blockedVendors;

  ngOnInit(): void {
  }

}
