import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.scss'],
})
export class NavigateBarComponent {
  isDarkmode: boolean = false;
  /**
   *
   */
  constructor(private localStorage: LocalStorageService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const darkmode = this.localStorage.getItem('darkmode');
    this.isDarkmode = darkmode;
    if (this.isDarkmode) {
      document.body.classList.add('darkmode');
    }
  }
  toggleDarkmode() {
    this.isDarkmode = !this.isDarkmode;
    this.localStorage.setItem('darkmode', this.isDarkmode);
    document.body.classList.toggle('darkmode');
  }
}
