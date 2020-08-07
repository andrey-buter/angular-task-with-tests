import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private vegetableNameSource = new BehaviorSubject<string>("");
  currentVegetableName = this.vegetableNameSource.asObservable();

  constructor() { }

  changeVegetableName(vegetable: string) {
    // add data to an observable
  }
}