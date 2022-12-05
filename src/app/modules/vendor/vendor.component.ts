import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vendors: { name: string; age: number; city: string; }[];

  
  constructor(service: VendorService) {
    this.vendors = service.vendors;
  }
  
  ngOnInit(): void {
  }

  blockedVendor ?: any;
  displayBlockedVendor(selectedVendor : any){
    this.blockedVendor = selectedVendor;
  }
}
