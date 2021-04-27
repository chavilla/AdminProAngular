import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages.routing';

import { NofoundComponent } from './nofound/nofound.component';

// my routes:Routes
const routes: Routes = [
  /*  path: 'dashboard', PagesRoutingModule */
  /* paths: ['login','register'], AuthRouting */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NofoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
