import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedDate: Subject<string>;

  constructor() {
    this.selectedDate = new Subject<string>();
  }
}
