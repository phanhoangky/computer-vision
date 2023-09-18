import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  ApiHelper,
  HTTPS_METHODS,
} from 'src/app/shared/services/api-helper.service';
import { SkeletonLoadingService } from 'src/app/shared/skeleton-loading/skeleton-loading.service';

@Injectable()
export class RefrigeratorService {
  pokemon$: BehaviorSubject<any> = new BehaviorSubject([]);

  /**
   *
   */
  constructor(
    private apiHelper: ApiHelper,
    private loadingService: SkeletonLoadingService
  ) {
    console.log('Refrigerator Service:', this.loadingService.id);
  }

  getPokemon() {
    this.loadingService.loading$.next(true);
    console.log('Loading Service Set', this.loadingService.loading$.getValue());

    this.apiHelper
      .callWithLoading(HTTPS_METHODS.GET, 'pokemon')
      .subscribe((result) => {
        this.pokemon$.next(result);
        this.loadingService.loading$.next(false);
      });
  }
}
