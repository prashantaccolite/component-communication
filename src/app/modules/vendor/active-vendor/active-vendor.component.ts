import { Component, OnInit,Input, Output } from '@angular/core';
import { VendorModel } from 'src/app/IVendor';
import { EventEmitter } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  @Input('parentData') public vendorList: any;
  constructor(private vendorService:VendorServiceService) {}

  ngOnInit(): void {
  }
  @Output() childEvent: EventEmitter<VendorModel> = new EventEmitter();
  selectedVendor? : VendorModel
  onSelect(vendor: VendorModel): void{
      this.selectedVendor = vendor;
      this.childEvent.emit(this.selectedVendor);
      this.vendorService.setBlockedVendor(this.selectedVendor);
  }
  
}
