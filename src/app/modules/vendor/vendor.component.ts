import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { VendorInputService } from 'src/app/vendor-input.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  selectedVendor:Vendor = {} as Vendor
  constructor(private vInput:VendorInputService) { }

  ngOnInit(): void {
    this.vInput.source.subscribe((d)=>{
      this.selectedVendor=d
    })
  }



}
