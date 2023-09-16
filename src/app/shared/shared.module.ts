import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, FabButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FormControlComponent } from './form-control/form-control.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faBinoculars, faBolt, faCameraRetro, faCircleUser, faFax, faGift, faHippo, faTicket } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    TableComponent,
    CardComponent,
    DrawerComponent,
    FabButtonComponent,
    FormControlComponent,
    PaginatorComponent
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    ButtonComponent,
    ModalComponent,
    TableComponent,
    CardComponent,
    DrawerComponent,
    FabButtonComponent,
    FormControlComponent,
    PaginatorComponent,
    FontAwesomeModule
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCircleUser, faTicket, faBinoculars, faBell, faCameraRetro, faHippo, faBolt)
  }
}
