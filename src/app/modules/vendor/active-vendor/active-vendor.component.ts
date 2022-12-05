import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input() vendors : Vendor[] = new Array<Vendor>();
  @Output() vendorClickedEvent = new EventEmitter<Vendor>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.vendors);
    
  }

  onClick(vendor : Vendor) {
    this.vendorClickedEvent.emit(vendor);
  }

}
