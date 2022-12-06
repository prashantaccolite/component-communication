import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { VendorDataService } from 'src/app/vendor-data.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  // vendorList : any[] = [
  //   {name : 'GHI',age : 21, city : 'Navi Mumbai'},
  //   {name : 'ABC',age : 22, city : 'Mumbai'},
  //   {name : 'HGI',age : 21, city : 'Navi Mumbai'}
  // ];

  blockedVendorList :Vendor[] = [];

  constructor(
    private vendor:VendorDataService
  ) { 

  }

  ngOnInit(): void {
  }
  
  vendors:Vendor[] = this.vendor.vendor;


  onBlockClick(vendor : Vendor){
    this.blockedVendorList.push(vendor);

  }

}
