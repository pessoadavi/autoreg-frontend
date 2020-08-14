import { SharedService } from 'src/app/services/shared/shared.service';
import { User } from './../../models/user.model';
import { CurrentUser } from './../../models/currentUser.model';
import { Router } from '@angular/router';
import { UserService } from './../../services/userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  user: User = {
    
    email: '',
    password: '',
    profile: ''

  }

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private router: Router) {
                this.sharedService = SharedService.getInstance();
              }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.user).subscribe((userAuthetication: CurrentUser) => {
      this.sharedService.user = userAuthetication.user;
      this.sharedService.token = userAuthetication.token;
      this.sharedService.showTemplate.emit(true);
      this.sharedService.user.profile = this.sharedService.user.profile.substring(5);
      this.router.navigate(['/home']);
    }, err => {
      this.sharedService.user = null;
      this.sharedService.token = null;
      this.sharedService.showTemplate.emit(false);
      this.userService.showMessage("Login ou senha incorretos");
    });
  }
  
  cancelLogin() {
    this.sharedService.user = null;
    this.sharedService.token = null;
    this.router.navigate(['/usuarios/login']);
  }
}



/* 
export class LoginComponent implements OnInit {

  logic: boolean;
  shared: SharedService;
  user: User = {
    
    email: '',
    password: '',
    profile: ''

  }

  constructor(
      private sharedService :SharedService,
      private userService: UserService,
      private router: Router) {}

  ngOnInit(): void {
    this.sharedService.currentLogic.subscribe(logic => 
      this.logic = logic);
  }

  loginAndChangeTemplateLogic() {
    this.userService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      this.shared.user.profile = this.shared.user.profile.substring(5);
      this.logic = !this.logic;
      this.sharedService.changeLogicTemplate(this.logic);
      console.log(this.logic);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.userService.showMessage("Usuário ou senha incorretos");
    });
      //this.logic = !this.logic;
      //this.sharedService.changeLogicTemplate(this.logic);
      //console.log(this.logic);
      //this.router.navigate(['/']);
    
  }

}*/
