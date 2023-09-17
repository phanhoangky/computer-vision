import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./summary/summary.module').then((m) => m.SummaryModule),
      },
      {
        path: 'refrigerator',
        component: RefrigeratorComponent,
        loadChildren: () =>
          import('./refrigerator/refrigerator.module').then(
            (m) => m.RefrigeratorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
