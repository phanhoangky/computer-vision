import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { drawerContainerSlide, drawerSlide } from '../animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [drawerSlide, drawerContainerSlide],
  hostDirectives: [],
})
export class DrawerComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event']) outsideClick(event: any) {
    if (event.target === this.el.nativeElement) {
      this.close.emit(true);
    }
  }
  @HostBinding('@drawerSlide') drawerSlide = true;

  /**
   *
   */
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeDrawer() {
    this.close.emit(true);
  }
}
