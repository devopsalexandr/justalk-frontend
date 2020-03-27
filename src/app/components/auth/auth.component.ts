import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private phoneNumber: string = null;
  loginForm: FormGroup;
  confirmForm: FormGroup;
  @ViewChild(MatStepper, { static: true })
  stepper: MatStepper;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      PhoneNumber: ['', Validators.required]
    });
    this.confirmForm = this.formBuilder.group({
      Code: ['', Validators.required]
    });
  }

  login(loginForm: FormGroup): void {
    const phoneNumber = loginForm.get('PhoneNumber').value as string;

    this.authService.login(phoneNumber)
      .subscribe(() => {
        this.phoneNumber = phoneNumber;
        this.stepper.next();
      });
  }

  confirm(confirmForm: FormGroup): void {

    const code = confirmForm.get('Code').value as string;

    this.authService.confirm(this.phoneNumber, code)
      .subscribe(
        () => this.router.navigate(['/profile']),
        error => console.log(error.error.errors)
      );
  }

  logout(): void {
    this.authService.logout();
  }
}
