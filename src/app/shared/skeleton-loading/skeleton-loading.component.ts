import { Component, ContentChildren, ElementRef } from '@angular/core';
import { SkeletonLoadingService } from './skeleton-loading.service';

@Component({
  selector: 'skeleton-loading',
  templateUrl: './skeleton-loading.component.html',
  styleUrls: ['./skeleton-loading.component.scss'],
})
export class SkeletonLoadingComponent {
  @ContentChildren('') childNodes: any;

  isLoading: boolean = true;
  /**
   *
   */
  constructor(
    private el: ElementRef,
    private loadingService: SkeletonLoadingService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadingService.loading$.subscribe((loading) => {
      console.log('Skeleton Component', loading);

      this.isLoading = loading;
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.childNodes = this.el.nativeElement.querySelector('*').childNodes;
  }
}
