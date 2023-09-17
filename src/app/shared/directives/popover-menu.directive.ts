import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';

@Directive({
  selector: '[triggerPopverMenu]',
})
export class PopoverMenuDirective {
  @Input('triggerPopverMenu') appPopoverMenu?: PopoverMenuComponent;
  @Input() position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' =
    'bottom-right';

  @HostListener('click', ['$event']) openMenu(event: any) {
    if (this.appPopoverMenu) {
      this.appPopoverMenu.show = true;
    }
  }

  @HostListener('document:click', ['$event']) clickOutSideMenu(event: any) {
    if (
      this.appPopoverMenu &&
      !this.el.nativeElement.contains(event.target) &&
      !event.target.contains(this.appPopoverMenu.elementRef.nativeElement)
    ) {
      this.appPopoverMenu.show = false;
    }
  }

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    (<HTMLElement>this.el.nativeElement).style.setProperty(
      'position',
      'relative'
    );
  }
  ngAfterViewInit(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    if (this.appPopoverMenu) {
      (<HTMLElement>this.el.nativeElement).appendChild(
        this.appPopoverMenu.elementRef.nativeElement
      );

      this.appPopoverMenu.setTriggerElement(this.el.nativeElement);

      (<HTMLElement>this.appPopoverMenu.elementRef.nativeElement).classList.add(
        this.position
      );
    }
  }
}
