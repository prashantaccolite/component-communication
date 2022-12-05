import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  Vendors: { name: string; age: string; city: string; }[];
  fetchData!:any;

  constructor(private service:VendorServiceService) {
    this.Vendors=service.Vendors;
    console.log(this.Vendors);
   }
  
   receiveFromChild(Vendors:any){
      this.fetchData=Vendors;
   }
  ngOnInit(): void {
  }

}
