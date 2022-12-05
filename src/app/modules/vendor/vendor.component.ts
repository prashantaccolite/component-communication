import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { Vendor } from './vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor(private vendorService:VendorService) { }
   
  activeVendors: Vendor[] = this.vendorService.getActiveVendors();
  blockedVendors: Vendor[] = this.vendorService.getBlockedVendors();
  blockedVendor: Vendor;

  blockVendor(blockedVendor:Vendor){
    this.blockedVendor = blockedVendor;
  }
  
  ngOnInit(): void {
  }

}
