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

  constructor(private router: Router,
              private sharedService: SharedService) { 
      this.sharedService = SharedService.getInstance();
      
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.sharedService.token = null;
    this.sharedService.user = null;
    this.sharedService.showTemplate.emit(false);
    //window.location.reload();
    this.router.navigate(['/login']);
  }
}
