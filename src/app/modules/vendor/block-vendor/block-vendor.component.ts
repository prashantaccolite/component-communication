import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { VendorInputService } from 'src/app/vendor-input.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  constructor(private vInput:VendorInputService) { }
  selectedVendor!:Vendor
  ngOnInit(): void {
    this.vInput.source.subscribe((d)=>{
      this.selectedVendor=d
    })
  }

}
