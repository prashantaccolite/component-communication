import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { VendorComponent } from '../vendor.component';
import { BlockVendorComponent } from '../block-vendor/block-vendor.component';
import { Vendor } from 'src/app/vendor';
import { VendorDataService } from 'src/app/vendor-data.service';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input() vendors?:Vendor[];
  @Output() emitVendor = new EventEmitter<Vendor>();

  // @Output blockedVendor = new EventEmitter< blocked : any>();
  
  
  constructor( private vendorService: VendorDataService) { }

  onBlockVendor(vendor : Vendor): void{
    this.emitVendor.emit(vendor);
    // this.vendors=this.vendors?.filter((data)=>data.name===vendor.name)
    this.vendorService.addBlockedVendor(vendor);
  }

  ngOnInit(): void {
  }

}
