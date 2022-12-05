import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnChanges {

  @Input() vendors?:any;
  @Output() newBlockEvent= new EventEmitter();

  ngOnChanges(): void {
  }
  selectedVendor ?: any;

  constructor(private vendorS : VendorService){}

  displayBlockedVendor(vendor:any){
    this.selectedVendor = vendor
    this.newBlockEvent.emit(vendor);
    this.vendorS.sendBlockedVendor(vendor);
  }
}
