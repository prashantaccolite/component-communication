import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { VendorInputService } from 'src/app/vendor-input.service';
import { FormsModule } from '@angular/forms';
import { Vendor } from 'src/app/vendor';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private vInput:VendorInputService) { }

  ngOnInit(): void {
  }
  list=this.vInput.getArray();
 
  sVendor?:Vendor
  onSelect(l:Vendor){
    this.sVendor=l;
    this.vInput.send(l);
  }
}
