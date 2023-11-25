import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink, getDeepFromObject } from '@nebular/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';
  showPassword = false;
  showRePass = false;

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {
    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service
      .register(this.strategy, this.user)
      .subscribe((result: NbAuthResult) => {
        this.submitted = false;
        if (result.isSuccess()) {
          this.messages = result.getMessages();
        } else {
          this.errors = result.getErrors();
        }

        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
        this.cd.detectChanges();
      });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }

  //Toggle Show Password
  getInputPassType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  getInputRePassType() {
    if (this.showRePass) {
      return 'text';
    }
    return 'password';
  }

  toggleShowRePassword() {
    this.showRePass = !this.showRePass;
  }
}
