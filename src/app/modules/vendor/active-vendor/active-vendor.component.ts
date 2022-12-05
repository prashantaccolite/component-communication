import { Component, OnInit, Injectable } from '@angular/core';
import { GetVendorsService } from 'src/app/modules/vendor/GetVendorsService';
import { UpdatorService } from '../vendor-update.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
@Injectable()
export class ActiveVendorComponent implements OnInit {
  vendors:any;
  constructor(private vendorsService:GetVendorsService,
              private vendorUpdateService:UpdatorService) {}

  sendVendor(vendor:any) {
    this.vendorUpdateService.SendVendor(vendor);
  }
  ngOnInit(): void {
    this.vendors = this.vendorsService.vendors();
  }

}
