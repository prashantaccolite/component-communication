
import { Component, OnInit, Input } from '@angular/core';
import { VendorService } from '../vendor.service';
import { VendorModel } from '../vendor-model';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  @Input() blockedVendorList?:VendorModel[];

  moveFromBlockedToActive(vendor:VendorModel){
    this.vendorService.moveFromBlockedToActive(vendor);

  }

  vendor!:VendorModel;
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.vendorService.blockVendor.subscribe(v =>{
      this.vendor=v;
    })
  }

}
