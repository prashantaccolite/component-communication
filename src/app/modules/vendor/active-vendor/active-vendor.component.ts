//import { VendorService } from './../vendor.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import { VendorService } from '../vendor.service';
// import { EventEmitter } from 'stream';
import { VendorModel } from '../vendor-model';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit,OnChanges {

  @Input() vendorList?:VendorModel[];

  @Output() blockVendorData =new EventEmitter();

  displayThisInParent(vendor:VendorModel){
    console.log(vendor.name+"From Parent calling Function");
    this.blockVendorData.emit(vendor);
  }

  displayThisInBlock(vendor:VendorModel){
    
    this.vendorService.sendBlockVendor(vendor);
    console.log(vendor.name);

  }

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    //emit here?
  }

  ngOnChanges(changes: SimpleChanges):void{
      //WHY
  }

}
