import { HomeReguladorComponent } from './crud-regulador/home-regulador/home-regulador.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewReguladorComponent } from './crud-regulador/new-regulador/new-regulador.component';
import { DeleteReguladorComponent } from './crud-regulador/delete-regulador/delete-regulador.component';
import { UpdateReguladorComponent } from './crud-regulador/update-regulador/update-regulador.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'reguladores', component: HomeReguladorComponent},
  { path: 'reguladores/create', component: NewReguladorComponent},
  { path: 'reguladores/delete/:id', component: DeleteReguladorComponent},
  { path: 'reguladores/update/:id', component: UpdateReguladorComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
