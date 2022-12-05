import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnChanges {

  @Input() vendors ?: Vendor[]
  @Output() newBlockEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
 
  constructor(private vendorService : VendorService){}
  selectedVendor ?: Vendor

  displayVendorParent(vendor : Vendor) {
    this.selectedVendor = vendor
    this.newBlockEvent.emit(vendor);
  }

  displayVendorBlock(vendor : Vendor) {
    this.vendorService.sendBlockedVendorDetails(vendor);
  }

}
