import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { VendorsService } from 'src/app/shared/vendors/vendors.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  vendorsData : Vendor[] = [
    {
      name: "John",
      age: "39",
      city: "Glasgow"
    },
    {
      name: "Melissa",
      age: "23",
      city: "Budapest"
    },
    {
      name: "Paul",
      age: "34",
      city: "London"
    },
    {
      name: "Oliver",
      age: "46",
      city: "Paris"
    }
  ];

  jsonVendorsDetailsFromAPI = {};
  cleanVendorDetails : Vendor[] = [];

  vendorDisplay : Vendor = new Vendor();

  constructor(private vendorsService:VendorsService) { }

  ngOnInit(): void {
    this.vendorsService.getVendorsDetails().subscribe(result => {
      this.jsonVendorsDetailsFromAPI = result;
      this.cleanVendorDetails = this.vendorsService.cleanVendorsDetails(this.jsonVendorsDetailsFromAPI);
      // console.log(this.cleanVendorDetails);
    });
  }

  displayVendor(vendorClicked: Vendor){
    this.vendorDisplay = vendorClicked;
    // console.log(this.vendorDisplay);
    
  }

}
