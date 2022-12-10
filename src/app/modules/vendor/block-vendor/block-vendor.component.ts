import { Component, Input, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { Vendors } from 'src/app/vendors';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  vendorBlock?:Vendors;

  @Input() blockedVendorList?:Vendors[]; //changed to ? from !



  constructor(private block:VendorServiceService) { }

  ngOnInit(): void {
    this.block.blockSubject.subscribe(d =>{
      this.vendorBlock=d});
  }
  unblocked(blockedVendor :Vendors)
  {
    this.block.sendToUnblock(blockedVendor);
  }

}
