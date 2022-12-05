import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PassToBlockService } from 'src/app/pass-to-block.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  person!: any;
  subscription!: Subscription;

  constructor(private passToBlock: PassToBlockService) {
    this.person = {};
    this.subscription = this.passToBlock.displaySelectedPerson().subscribe((person) => this.person = person);
  }

  ngOnInit(): void {
    
  }



  


}
