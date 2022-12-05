import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassToBlockService {
  private person!: any;
  private subject = new Subject<any>();

  constructor() { }

  setSelectedPerson(person: any){
    this.person = person;
    this.subject.next(this.person);
  }

  displaySelectedPerson(){
    return this.subject.asObservable();
  }

}
