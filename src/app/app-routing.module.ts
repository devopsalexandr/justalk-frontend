import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: AuthComponent, canActivate: [AuthGuard]},
  {
    path: 'profile', component: MainLayoutComponent, children: [
      // {path: '', redirectTo: '/profile', pathMatch: 'full'},
      {path: '', component: ProfileComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
