import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  vendors:any;
  constructor() { }

  sendVendor(vendorObject:any) {
    console.log(vendorObject);
  }

  ngOnInit(): void {
    this.vendors = [
      {
        "name": "vend1",
        "age": 40,
        "city": "city1",
      },
      {
      "name": "vend2",
      "age": 41,
      "city": "city2",
      },
      {
        "name": "vend3",
        "age": 43,
        "city": "city3",
      },
      {
        "name": "vend4",
        "age": 39,
        "city": "city4",
      },
      {
        "name": "vend5",
        "age": 37,
        "city": "city5",
      },
  ];
  }

}
