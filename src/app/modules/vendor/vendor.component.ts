import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent implements OnInit {
  constructor() {}
  people: any[] = [];

  public getPeople() {
    return this.people;
  }

  ngOnInit(): void {
    this.people = [
      {
        name: 'Name 1',
        age: '25',
        city: 'Glasgow',
      },
      {
        name: 'Name 2',
        age: '26',
        city: 'London',
      },
      {
        name: 'Name 3',
        age: '27',
        city: 'Southampton',
      },
      {
        name: 'Name 4',
        age: '28',
        city: 'Leeds',
      },
      {
        name: 'Name 5',
        age: '29',
        city: 'Birmingham',
      },
    ];
  }
}
