import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  private step: number = 1;
  private step$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.step
  );
  private count: number = 1;

  initCount(count: number) {
    this.count = count;
  }

  initStep(step = 1) {
    this.step = step;
    this.step$.next(this.step);
    this.toTop();
  }

  next() {
    if (this.step < this.count) this.step$.next(++this.step);
    this.toTop();
  }

  prev() {
    if (this.step > 1) this.step$.next(--this.step);

    this.toTop();
  }

  getStep(): Observable<number> {
    return this.step$.asObservable();
  }

  private toTop() {
    window.scrollTo(0, 0);
  }
}
