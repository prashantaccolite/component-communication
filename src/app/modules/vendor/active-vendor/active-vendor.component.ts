import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor';
import { ROUTING } from 'src/app/shared/constants/routing.constant';
import { VendorsService } from 'src/app/shared/vendors/vendors.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input() vendors : Vendor[] = new Array<Vendor>();
  @Output() vendorClickedEvent = new EventEmitter<Vendor>();

  constructor(private vendorsService: VendorsService, private router : Router) { }

  ngOnInit(): void {
    if (this.vendors.length == 0){
      this.vendorsService.getVendorsDetails().subscribe((res : any) => {
        this.vendors = this.vendorsService.cleanVendorsDetails(res);
      });
    }
    
  }

  onClick(vendor : Vendor) {
    if (this.router.url === (`/${ROUTING.VENDOR}/${ROUTING.ALL}`)){
      this.vendorClickedEvent.emit(vendor);
    } else {
      this.vendorsService.setVendorToDiplay(vendor);
      this.router.navigate([`/${ROUTING.VENDOR}/${ROUTING.BLOCK}`]);
    }
  }

}
