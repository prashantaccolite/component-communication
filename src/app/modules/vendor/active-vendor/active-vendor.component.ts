import { Component, OnInit, Output } from '@angular/core';
import { VendorComponent } from '../vendor.component';
import { PassToBlockService } from 'src/app/pass-to-block.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss'],
})

export class ActiveVendorComponent implements OnInit {
  people: { name: string; age: string; city: string }[] = [];

  nameToChild='';
  ageToChild='';
  cityToChild='';

  constructor(
    private vendorComponent: VendorComponent,
    private passService: PassToBlockService,
  ) {}

  ngOnInit(): void {
    this.people = this.vendorComponent.getPeople();
  }

  displayPerson(person: any) {
    this.nameToChild= person.name;
    this.ageToChild= person.age;
    this.cityToChild = person.city;
  }
}
