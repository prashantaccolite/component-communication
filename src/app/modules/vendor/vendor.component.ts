import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/IVendor';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  vendorList:VendorModel[]=[{name:"Tanmay",age:1,city:"Dehradun"},{name:"Addy",age:2,city:"Pauri"},{name:"Anushka",age:3,city:"Mussouri"}];
  selectedVendor:VendorModel={name:"",age:0,city:""};
}
