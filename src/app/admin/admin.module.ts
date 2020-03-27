import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/admin', pathMatch: 'full'},
      {path: '', component: DashboardComponent}
    ]
  },
];

@NgModule({
  declarations: [MainLayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
