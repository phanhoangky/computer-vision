import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SkeletonLoadingService {
  static counter: number = 0;
  id: number = 0;
  /**
   *
   */
  constructor() {
    this.id = SkeletonLoadingService.counter++;
    console.log(SkeletonLoadingService.counter);
  }
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
