import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  {path: '', component: AuthComponent},
  {
    path: 'profile', component: MainLayoutComponent, children: [
      // {path: '', redirectTo: '/profile', pathMatch: 'full'},
      {path: '', component: ProfileComponent}
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
