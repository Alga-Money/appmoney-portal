import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
  {path: 'login', component: SigninComponent},
  {path: 'register', component: SignupComponent},
  // { path: 'cpf', component: CpfVerificationComponent },
  // { path: 'email-confirm', component: EmailVerificationComponent },
  // { path: 'cadastro', component: SignupComponent },
  // { path: 'recuperar-senha', component: RecoverPasswordComponent },
  // { path: 'recover-email-password', component: RecoverPasswordEmailComponent },
  // { path: 'recover-email-confirmation', component: PasswordEmailConfirmationComponent },
  // { path: 'recover-sms-password', component: RecoverPasswordSmsComponent },
  // { path: 'recover-sms-confirmation', component: PasswordSmsConfirmationComponent },
  // { path: 'recover-cpf-password', component: RecoverPasswordCpfComponent },
  // { path: 'recover-cpf-confirmation', component: PasswordCpfConfirmationComponent },
  // { path: 'email-verified/:token', component: EmailConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
