import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbThemeModule,
  NbIconModule,
  NbTooltipModule,
  NbFormFieldModule
} from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ValidateEqualModule } from 'ng-validate-equal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAuthModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbThemeModule,
    NbLayoutModule,
    NbIconModule,
    NbTooltipModule,
    NbFormFieldModule,
    ValidateEqualModule,
  ],
  declarations: [SigninComponent, SignupComponent],
})
export class AuthModule {}
