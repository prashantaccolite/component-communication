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

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    //emit here?
  }

  @Input() vendorList?:VendorModel[]; //recieieving from parent

  @Output() blockVendorData =new EventEmitter(); //emitting to parent

  displayThisInParent(vendor:VendorModel){
    console.log(vendor.name+"From Parent calling Function");
    this.blockVendorData.emit(vendor);
  }

  // displayThisInBlock(vendor:VendorModel){
  //   //console.log("WORKING");
  //   console.log(vendor.name);
  // }

  moveFromActiveToBlocked(vendor:VendorModel){
    this.vendorService.sendBlockVendor(vendor);
    console.log(vendor.name);
    this.vendorService.moveFromActiveToBlocked(vendor);
  }

 

  ngOnChanges(changes: SimpleChanges):void{
      //WHY
  }

}
