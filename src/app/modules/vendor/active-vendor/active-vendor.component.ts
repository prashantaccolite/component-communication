import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { Vendors } from 'src/app/vendors';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  @Input()
  vendor!: Vendors[]; //changed
  //vendor!: any[]; 
  @Output()
  vendorArr= new EventEmitter<Vendors>();


  constructor(private block:VendorServiceService) { }
 
  vendorUnblock?:Vendors;

  ngOnInit(): void {
  }
  onClick(vendor:Vendors)
  {
    this.vendorArr.emit(vendor);
  }
  passToBlock(vendor:Vendors)
  {
   // console.log("Blocking "+ vendor.name)
    this.block.sendToBlock(vendor);
  }
}
