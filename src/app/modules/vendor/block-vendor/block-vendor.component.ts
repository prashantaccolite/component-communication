import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  @Input() vendor : Vendor = new Vendor();

  constructor() {}

  ngOnInit(): void {
  }



}
