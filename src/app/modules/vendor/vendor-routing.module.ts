import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from '../../shared/constants/routing.constant';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';
import { BlockVendorComponent } from './block-vendor/block-vendor.component';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
  { path: "", redirectTo: ROUTING.ALL, pathMatch: "full" },
  { path: ROUTING.ALL, component: VendorComponent },
  { path: ROUTING.BLOCK, component: BlockVendorComponent},
  { path: ROUTING.ACTIVE, component: ActiveVendorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
