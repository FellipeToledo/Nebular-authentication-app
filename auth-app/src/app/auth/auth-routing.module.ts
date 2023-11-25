import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLogoutComponent } from '@nebular/auth';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SigninComponent,
      },
      {
        path: 'sign-up',
        component: SignupComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
