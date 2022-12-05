import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit ,Input, OnChanges, SimpleChanges,Output,EventEmitter} from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';



@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnChanges {

  constructor(private vendorService:VendorServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  @Input() Vendors:any;
  @Output() BlockData =new EventEmitter();

  selectedVendor ?: any;
  displayBlockedVendor(vendor:any){
    this.selectedVendor = vendor;
    console.log(this.selectedVendor);
    this.BlockData.emit(this.selectedVendor);
    this.vendorService.sendBlockVendor(vendor);
  }


  
}
