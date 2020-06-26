import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: User = {
    
    email: '',
    login: '',
    password: '',
    authority: ''

  }

  


  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }


  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
      this.userService.showMessage('Usuário Cadastrado!!!');
      this.router.navigate(['/usuarios']);
    })
  }

  cancel(): void {
    this.userService.showMessage('Ação cancelada!!!');
    this.router.navigate(['/usuarios']);
  }

}
