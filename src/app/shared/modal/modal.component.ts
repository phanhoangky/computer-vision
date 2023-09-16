import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, NgModule, Output } from '@angular/core';
import { modalAni } from '../animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [modalAni]
})
export class ModalComponent implements AfterViewInit {

  modalContainer: HTMLElement | undefined = undefined;

  @Output() close = new EventEmitter<boolean>();

  @HostBinding('@modalToggle') modalToggle = true;

  @HostListener('document:click', ["$event"]) outsideClick(event: any) {
    if (event.target && event.target === this.el.nativeElement) {
      this.close.emit();
    }
  }
  /**
   *
   */
  constructor(private el: ElementRef) {
    console.log(el);

  }

  ngAfterViewInit(): void {
    document.body.appendChild(this.el.nativeElement)
    this.modalContainer = this.el.nativeElement.getElementsByClassName('modal-container')[0]
  }

  closeModal() {
    this.close.emit();
  }
}
