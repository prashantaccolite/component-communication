
import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { VendorModel } from '../vendor-model';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  vendor!:VendorModel;
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.vendorService.blockVendor.subscribe(v =>{
      this.vendor=v;
    }) //not sure of blockVendor
  }

}
