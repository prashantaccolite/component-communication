import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor';
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor(private vendorService : VendorService) { }

  ngOnInit(): void {

  }
  vendorsList = this.vendorService.vendors

  blockedVendor ?: Vendor
  displayBlockedVendor(selectedVendor : Vendor){
    this.blockedVendor = selectedVendor
  }
}
