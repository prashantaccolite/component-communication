import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  @Input() blockedVendors ?: Vendor[]
  blockedVendor ?: Vendor
  constructor(private vendorService : VendorService) { }

  ngOnInit(): void {
    this.vendorService.sendDetail.subscribe(blockedVendor =>{this.blockedVendor = blockedVendor})
  }

  sendUnblockedToParents(blockedVendor : Vendor){
    this.vendorService.sendUnBlockedtoParents(blockedVendor);
  }
}
