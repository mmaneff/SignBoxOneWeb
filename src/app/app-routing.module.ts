import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent,  canActivate: [ AuthGuardService ] },
  { path: 'login', component: LoginComponent },
  {
    path: 'modulo-recibos',
    loadChildren: './modulo-recibos/modulo-recibos.module#ModuloRecibosModule',
    canActivate: [ AuthGuardService ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
