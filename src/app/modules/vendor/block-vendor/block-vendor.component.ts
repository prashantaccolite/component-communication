import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor';
import { ROUTING } from 'src/app/shared/constants/routing.constant';
import { VendorsService } from 'src/app/shared/vendors/vendors.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  vendorDisplay: Vendor = new Vendor;
  shouldDisplayActiveButton : boolean = false;
  @Input() vendor : Vendor = new Vendor();

  constructor(private router : Router, private vendorService : VendorsService) {}

  ngOnInit(): void {
    if (this.router.url === `/${ROUTING.VENDOR}/${ROUTING.BLOCK}`){
      this.vendorDisplay = this.vendorService.getVendorToDisplay();
      this.shouldDisplayActiveButton = true;
    } else {
      this.shouldDisplayActiveButton = false;
    }
  }

  ngOnChanges(vendorDetail: any) {
    this.vendorDisplay = vendorDetail.vendor.currentValue;
    console.log(this.vendorDisplay);
  }

  navigateToActiveVendors(){
    this.router.navigate([`/${ROUTING.VENDOR}/${ROUTING.ACTIVE}`]);
  }
}
