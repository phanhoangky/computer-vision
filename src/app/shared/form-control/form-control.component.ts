import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  host: {
    'direction': 'vertical'
  }
})
export class FormControlComponent {

  @Input() isLabel: boolean = true;

  constructor(private el: ElementRef){
    // console.log(el.nativeElement.getAttribute('direction'));
  }
}
