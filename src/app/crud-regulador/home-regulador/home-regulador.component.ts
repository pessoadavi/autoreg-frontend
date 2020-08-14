import { ReguladorService } from './../../services/reguladorService/regulador.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-regulador',
  templateUrl: './home-regulador.component.html',
  styleUrls: ['./home-regulador.component.css']
})
export class HomeReguladorComponent implements OnInit {

  id: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  receiveId($event) {
    this.id = $event;
    console.log(this.id);
  }

  createRegulador(): void {
    this.router.navigate(['/reguladores/create']);
  }

  deleteRegulador():void {
    this.router.navigate(['/reguladores/delete/{{id}}']);
  }

  updateRegulador():void {
    this.router.navigate(['/reguladores/update/{{id}}']);
  }

}
