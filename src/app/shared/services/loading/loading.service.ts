import { inject, Injectable } from '@angular/core';
import { CommonService } from '@services/common/common.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private commonService = inject(CommonService);
  private isLoading$ = new BehaviorSubject<boolean>(false);

  setLoading(isLoading: boolean) {
    isLoading
      ? this.commonService.addBodyClass('body_overflow_hidden')
      : this.commonService.removeBodyClass('body_overflow_hidden');
    this.isLoading$.next(isLoading);
  }

  getIsLoading() {
    return this.isLoading$.asObservable();
  }
}
