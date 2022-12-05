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
  userBlocked:any = [];
  constructor(private vendorS : VendorService){
    this.userBlocked = vendorS.userBlocked;
  }
  
  displayBlockedVendor(vendor:any){
    this.newBlockEvent.emit(vendor);
    this.vendorS.sendBlockedVendor(vendor);
    this.vendorS.unblockToBlock(vendor);
  }
}
