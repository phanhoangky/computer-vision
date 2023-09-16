import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button:not([fab])',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', './button-common.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

}


@Component({
  selector: 'app-button[fab]',
  templateUrl: './button.component.html',
  styleUrls: ['./fab-button.scss', './button-common.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FabButtonComponent {}
