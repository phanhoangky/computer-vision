import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, FabButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FormControlComponent } from './form-control/form-control.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faBinoculars,
  faBolt,
  faCameraRetro,
  faCircleUser,
  faFax,
  faGift,
  faHippo,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { PopoverMenuItemComponent } from './popover-menu/popover-menu-item/popover-menu-item.component';
import { PopoverMenuDirective } from './directives/popover-menu.directive';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    TableComponent,
    CardComponent,
    DrawerComponent,
    FabButtonComponent,
    FormControlComponent,
    PaginatorComponent,
    ContextMenuComponent,
    PopoverMenuComponent,
    PopoverMenuDirective,
    PopoverMenuItemComponent,
    ListComponent,
    ListItemComponent,
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
    PopoverMenuComponent,
    PopoverMenuItemComponent,
    PopoverMenuDirective,
    ListComponent,
    ListItemComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCircleUser,
      faTicket,
      faBinoculars,
      faBell,
      faCameraRetro,
      faHippo,
      faBolt
    );
  }
}
