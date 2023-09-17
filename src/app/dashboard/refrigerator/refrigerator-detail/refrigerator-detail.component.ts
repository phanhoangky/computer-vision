import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RefrigeratorDetailModel } from 'src/app/shared/models/refrigerator.model';

@Component({
  selector: 'app-refrigerator-detail',
  templateUrl: './refrigerator-detail.component.html',
  styleUrls: ['./refrigerator-detail.component.scss'],
})
export class RefrigeratorDetailComponent implements OnChanges {
  @Input('input') value?: RefrigeratorDetailModel;
  constructor() {}

  ngOnChanges(): void {
    console.log(this.value);
  }
}
