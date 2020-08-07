import { AuthGuard } from './security/auth.guard/auth.guard';
import { LoginComponent } from './security/login/login.component';
import { UpdateUserComponent } from './crud-user/update-user/update-user.component';
import { DeleteUserComponent } from './crud-user/delete-user/delete-user.component';
import { NewUserComponent } from './crud-user/new-user/new-user.component';
import { HomeUserComponent } from './crud-user/home-user/home-user.component';
import { HomeReguladorComponent } from './crud-regulador/home-regulador/home-regulador.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewReguladorComponent } from './crud-regulador/new-regulador/new-regulador.component';
import { DeleteReguladorComponent } from './crud-regulador/delete-regulador/delete-regulador.component';
import { UpdateReguladorComponent } from './crud-regulador/update-regulador/update-regulador.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  
  { path: 'reguladores', component: HomeReguladorComponent, canActivate: [AuthGuard]},
  { path: 'reguladores/create', component: NewReguladorComponent, canActivate: [AuthGuard]},
  { path: 'reguladores/delete/:id', component: DeleteReguladorComponent, canActivate: [AuthGuard]},
  { path: 'reguladores/update/:id', component: UpdateReguladorComponent, canActivate: [AuthGuard]},
  
  { path: 'usuarios', component: HomeUserComponent, canActivate: [AuthGuard]},
  { path: 'usuarios/create', component: NewUserComponent, canActivate: [AuthGuard]},
  { path: 'usuarios/delete/:id', component: DeleteUserComponent, canActivate: [AuthGuard]},
  { path: 'usuarios/update/:id', component: UpdateUserComponent, canActivate: [AuthGuard]},

  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
