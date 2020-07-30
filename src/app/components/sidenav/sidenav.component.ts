import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  logic: boolean;
  public shared: SharedService;

  constructor(
      private userService: UserService,
      private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    
  }

}
