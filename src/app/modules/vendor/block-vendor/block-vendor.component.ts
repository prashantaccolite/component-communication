import { Component, OnInit } from '@angular/core';
import { SendVendorService } from '../send-vendor.service';
import { UpdatorService } from '../vendor-update.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  selectedVendor:any;
  constructor(private vendorUpdateService:UpdatorService) { }

  ngOnInit(): void {
    this.selectedVendor = {
      "name": "vend1",
      "age": 40,
      "city": "city1",
    }
    this.vendorUpdateService.update.subscribe((vendor) => {
      this.selectedVendor = vendor})
    }
  }

