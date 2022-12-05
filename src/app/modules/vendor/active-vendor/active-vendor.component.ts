import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { VendorComponent } from '../vendor.component';

export interface person{
  name:string,
  age:number,
  city:string
}

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Output() selectPerson = new EventEmitter<person>();

  constructor(private service: VendorService) { }

  @Input() people!: person[];

  ngOnInit(): void {
      
  }

  showDetails(p: person): void {
      this.selectPerson.emit(p);
  }

}
