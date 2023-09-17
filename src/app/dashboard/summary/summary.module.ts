import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SummaryComponent } from './summary.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent,
  },
];

@NgModule({
  declarations: [SummaryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [],
})
export class SummaryModule {}
