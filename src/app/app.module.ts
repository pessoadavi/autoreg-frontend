import { AuthGuard } from './security/auth.guard/auth.guard';
import { SharedService } from './services/shared/shared.service';
import { UserService } from 'src/app/services/userService/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HomeReguladorComponent } from './crud-regulador/home-regulador/home-regulador.component';
import { NewReguladorComponent } from './crud-regulador/new-regulador/new-regulador.component';
import { DeleteReguladorComponent } from './crud-regulador/delete-regulador/delete-regulador.component';
import { ListReguladorComponent } from './crud-regulador/list-regulador/list-regulador.component';
import { UpdateReguladorComponent } from './crud-regulador/update-regulador/update-regulador.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { HomeUserComponent } from './crud-user/home-user/home-user.component';
import { NewUserComponent } from './crud-user/new-user/new-user.component';
import { DeleteUserComponent } from './crud-user/delete-user/delete-user.component';
import { ListUserComponent } from './crud-user/list-user/list-user.component';
import { UpdateUserComponent } from './crud-user/update-user/update-user.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './security/login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthInterceptor } from './security/auth.interceptor/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    
    HomeComponent,

    HomeReguladorComponent,
    NewReguladorComponent,
    DeleteReguladorComponent,
    ListReguladorComponent,
    UpdateReguladorComponent,
    
    HomeUserComponent,
    NewUserComponent,
    DeleteUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule
  ],

  providers: [
    UserService,
    SharedService,
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],

  bootstrap: [AppComponent],
  //entryComponents: [DeleteReguladorComponent]
})
export class AppModule { }
