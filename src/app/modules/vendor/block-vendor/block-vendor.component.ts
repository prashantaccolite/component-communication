import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  constructor() { }

  nameFromParent = "test";
  ageFromParent = "test";
  cityFromParent = "test";

  ngOnInit(): void {
  }

  


}
