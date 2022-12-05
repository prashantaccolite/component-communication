import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';

export interface person{
  name:string,
  age:number,
  city:string
}
export interface user{
  id:number,
  name:string,
  username:string,
  email:string,
  address: {
      street:string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  constructor(private service: VendorService) { }

  people:person[] = [];
  users!:user[];

  @Output() selectPerson = new EventEmitter<user>();

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (data:any)=> {this.users = data;}
      );
    this.people = this.service.getLocalData();
  }

  showDetails(p: user): void {
      this.selectPerson.emit(p);
  }

}
