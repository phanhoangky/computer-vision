import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'computer-vision';
  isModal: boolean = true;
  isDrawer: boolean = false;


  closeDrawer(event: boolean) {
    this.isDrawer = !this.isDrawer
    console.log("Close, event");

  }

  closeModal(event: boolean) {
    this.isModal = false;
  }
}
