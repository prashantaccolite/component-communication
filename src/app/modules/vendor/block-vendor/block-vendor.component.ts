import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  vendorDisplay = new Vendor();
  @Input() vendor : Vendor = new Vendor();

  constructor() {}

  ngOnInit(): void {
    this.vendorDisplay = this.vendor;
  }
}
