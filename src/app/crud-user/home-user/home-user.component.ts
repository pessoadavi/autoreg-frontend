import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  createUser(): void {
    this.router.navigate(['usuarios/create']);
  }
}
