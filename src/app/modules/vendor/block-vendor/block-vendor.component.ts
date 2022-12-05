import { Component, OnInit, Input } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  constructor(private vendorS: VendorService) { }
  blockedVendor:any = [];

  ngOnInit(): void {
    this.vendorS.vendorSubject.subscribe(v =>{
      this.blockedVendor.push(v);
      //console.log(this.blockedVendor);
    })
  }
}
