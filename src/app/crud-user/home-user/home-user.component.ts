import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  id:number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  receiveId($event) {
    this.id = $event;
  }

  createUser(): void {
    this.router.navigate(['usuarios/create']);
  }

  updateUser():void {
    this.router.navigate(['usuarios/update', this.id]);
  }

  deleteUser():void {
    this.router.navigate(['usuarios/delete', this.id]);
  }
}
