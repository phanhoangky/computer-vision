import {
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent {
  private _subs: Subscription[] = [];

  @ContentChildren(ListItemComponent) listItems:
    | QueryList<ListItemComponent>
    | undefined;

  /**
   *
   */
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (this.listItems) {
      console.log(this.listItems);
      this.listItems.forEach((item) => {
        this._subs.push(
          item.selected$.subscribe((selectedItem) => {
            this.listItems?.forEach((item) => {
              if (item.elementRef === selectedItem) {
                item.isSelected = true;
              } else {
                item.isSelected = false;
              }
            });
          })
        );
      });
    }
  }

  private observeItemChanges() {
    if (this.listItems) {
      this._subs.push(
        this.listItems.changes.subscribe((list) => {
          this.unsubscribe();
          console.log('List Change', list);
        })
      );
    }
  }
  private unsubscribe() {
    this._subs.forEach((sub) => {
      sub.unsubscribe();
    });
    this._subs = [];
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe();
  }
}
