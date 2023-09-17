import {
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { popoverMenu } from '../animations';

@Component({
  selector: 'popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [popoverMenu],
})
export class PopoverMenuComponent implements OnInit {
  private isShow: boolean = false;
  private triggerElement?: HTMLElement;

  /**
   *
   */
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  get elementRef() {
    return this.el;
  }

  get show() {
    return this.isShow;
  }
  set show(value: boolean) {
    // this.renderer.setProperty(this.el.nativeElement, 'display', value);
    this.isShow = value;
  }
  setTriggerElement(el: HTMLElement) {
    this.triggerElement = el;
  }
}
