import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryComponent } from './summary/summary.component';
import { MaterialModule } from '../material-shared/materials.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigateBarComponent,
    SideMenuComponent,
    FooterComponent,
    SummaryComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MaterialModule],
})
export class DashboardModule {}
