import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { VendorComponent } from '../vendor.component';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  
  
  Vendors: any;

  constructor(private vendorService:VendorServiceService) { }

  ngOnInit(): void {
      this.vendorService.blockVendor.subscribe((vendor: any) =>{
        this.Vendors=vendor;
      })
  }
}

