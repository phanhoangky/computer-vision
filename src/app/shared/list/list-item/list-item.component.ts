import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    tabIndex: '0',
  },
})
export class ListItemComponent {
  selected$: Subject<ElementRef> = new Subject();
  isSelected: boolean = false;

  @HostBinding('class.selected') get selected() {
    return this.isSelected ? 'selected' : '';
  }

  @HostListener('click', ['$event']) clicked(event: any) {
    this.selected$.next(this.el);
  }
  /**
   *
   */
  constructor(private el: ElementRef) {}

  get elementRef() {
    return this.el;
  }
}
