import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
  {path: 'login', component: SigninComponent},
  {path: 'register', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
