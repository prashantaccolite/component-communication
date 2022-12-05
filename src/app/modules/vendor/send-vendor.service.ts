import { Injectable } from '@angular/core';

@Injectable()
export class SendVendorService {
  private vendor = {};
  setVendor(vendor:any) {
    this.vendor = vendor;
  }
  getVendor(){
    return this.vendor;
  }
}
