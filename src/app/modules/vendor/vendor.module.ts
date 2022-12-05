import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';
import { VendorComponent } from './vendor.component';
import { BlockVendorComponent } from './block-vendor/block-vendor.component';
import { GetVendorsService } from 'src/app/modules/vendor/GetVendorsService';
import { SendVendorService } from './send-vendor.service';
import { UpdatorService } from './vendor-update.service';

@NgModule({
  declarations: [
    ActiveVendorComponent,
    VendorComponent,
    BlockVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ],
  providers: [GetVendorsService,
    SendVendorService,
    UpdatorService],

})
export class VendorModule { }
