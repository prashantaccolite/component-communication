import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/IVendor';
import { VendorServiceService } from 'src/app/vendor-service.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  blockedvendor:VendorModel={name:"",age:0,city:""};
  constructor(private venderService:VendorServiceService) { }

  ngOnInit(): void {
    this.venderService.vendorObservable.subscribe(blockedVendor =>{
      this.blockedvendor=blockedVendor}) //not sure of blockVendor
    }
  }
