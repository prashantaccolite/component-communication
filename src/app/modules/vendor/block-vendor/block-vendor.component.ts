import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { VendorDataService } from 'src/app/vendor-data.service';


@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  blockedVendors:Vendor[] = [];
  // addBlockedUserToArray(blockedVendor:Vendor){
  //   this.blockedVendors.push(blockedVendor);
  // }

  constructor( private vendorService : VendorDataService) { }

  ngOnInit(): void {
    this.vendorService.vendorObservable.subscribe((vendor) =>{
      const checkIfPresent=this.blockedVendors.some((item)=>item.name===vendor.name)
      if(checkIfPresent)
      alert("already blocked")
      else
      this.blockedVendors.push(vendor);
    }
    )
  }

}
