import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UpdatorService {
  @Output() update = new EventEmitter<any>();
  SendVendor(vendor:any) {
    this.update.emit(vendor);
  }
}
