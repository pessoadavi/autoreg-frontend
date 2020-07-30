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
  { path: 'home', component: HomeComponent},
  
  { path: 'reguladores', component: HomeReguladorComponent},
  { path: 'reguladores/create', component: NewReguladorComponent},
  { path: 'reguladores/delete/:id', component: DeleteReguladorComponent},
  { path: 'reguladores/update/:id', component: UpdateReguladorComponent},
  
  { path: 'usuarios', component: HomeUserComponent},
  { path: 'usuarios/create', component: NewUserComponent},
  { path: 'usuarios/delete/:id', component: DeleteUserComponent},
  { path: 'usuarios/update/:id', component: UpdateUserComponent},

  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
