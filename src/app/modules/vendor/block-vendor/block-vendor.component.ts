import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  constructor(private vendorService:VendorService) { }
   
  blockedVendors:Vendor[];

  ngOnInit(){
    this.vendorService.vendorobs.subscribe((blockedVendors)=>{
      console.log(blockedVendors);
      this.blockedVendors = blockedVendors;
    });
  }

}
