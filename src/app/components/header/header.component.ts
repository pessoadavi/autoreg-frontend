import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/userService/user.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shared: SharedService;

  constructor(private userService: UserService,
              private router: Router) { 
      this.shared = SharedService.getInstance();
      
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.shared.token = null;
    this.shared.user = null;
    this.shared.showTemplate.emit(false);
    //window.location.reload();
    this.router.navigate(['/login']);
  }
}
