import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  _vendorDisplay : Vendor = new Vendor();

  constructor(private http: HttpClient) { }

  getVendorsDetails(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  cleanVendorsDetails(data: any){
    let cleanData : Vendor[] = [];
    data.forEach((fullVendorDetail:any) => {
      let name : string = fullVendorDetail.name;
      let age : string = (Math.floor(Math.random() * 100)).toString();
      let city : string = fullVendorDetail.address.city;
      let vendor : Vendor = {
        "name":name,
        "age":age,
        "city":city
      };
      cleanData.push(vendor);
    });
    return cleanData;
  }

  setVendorToDiplay(vendorDetail:Vendor){
    this._vendorDisplay = vendorDetail;
  }

  getVendorToDisplay():Vendor{
    return this._vendorDisplay;
  }
}
