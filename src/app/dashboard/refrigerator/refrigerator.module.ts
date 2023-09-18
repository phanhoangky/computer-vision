import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefrigeratorDetailComponent } from './refrigerator-detail/refrigerator-detail.component';
import { MaterialModule } from 'src/app/material-shared/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RefrigeratorComponent } from './refrigerator.component';
import { RefrigeratorService } from './services/refrigerator.service';

@NgModule({
  declarations: [RefrigeratorComponent, RefrigeratorDetailComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  providers: [],
})
export class RefrigeratorModule {}
