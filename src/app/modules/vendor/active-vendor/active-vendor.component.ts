import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
  }

  @Input() activeVendors? :Vendor[];
  @Output() blockedVendor = new EventEmitter<Vendor>();

  blockVendor(vendor:Vendor):void{
     this.blockedVendor.emit(vendor); 

  }

  // ngOnChanges(changes: SimpleChanges):void{
  //   changes
  // }

}
