import { Component, OnInit, Input } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { ActiveVendorComponent } from '../active-vendor/active-vendor.component';

export interface person{
  name:string,
  age:number,
  city:string
}

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  @Input() details!: person;

  constructor() { }

  ngOnInit(): void {
  
  }

}
