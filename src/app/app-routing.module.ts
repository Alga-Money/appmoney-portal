import {CommonModule} from '@angular/common';

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AcessDeniedComponent} from './core/acess-denied/acess-denied.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'login', loadChildren: './auth/auth.module#AuthModule'},
  {path: '', loadChildren: './pages/pages.module#PagesModule'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
