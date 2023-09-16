import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input('paginationConfig') paginationConfig: any;

  ngOnChanges(): void {
    console.log(this.paginationConfig);
  }
}
