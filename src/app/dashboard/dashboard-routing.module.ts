import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
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
export class DashboardRoutingModule {
}
