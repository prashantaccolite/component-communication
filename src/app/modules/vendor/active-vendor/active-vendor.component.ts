import { Component, OnInit, Output } from '@angular/core';
import { PassToBlockService } from 'src/app/pass-to-block.service';
import { VendorComponent } from '../vendor.component';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss'],
})

export class ActiveVendorComponent implements OnInit {
  people: { name: string; age: string; city: string }[] = [];

  constructor(
    private vendorComponent: VendorComponent,
    private passToBlock: PassToBlockService,
  ) {}

  ngOnInit(): void {
    this.people = this.vendorComponent.getPeople();
  }

  displayPerson(person: any) {
    this.passToBlock.setSelectedPerson(person);
  }
}
