import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from './shared/shared.module';
import {AuthService} from './services/auth.service';
import {TokenProvider} from './services/token.provider';
import {AuthGuard} from './guards/auth.guard';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptor} from './interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProfileComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SharedModule
  ],
  providers: [
    { provide: 'BASE_HOST', useValue: environment.baseHost },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    AuthService,
    TokenProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
