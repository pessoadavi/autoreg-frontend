import { ReguladorService } from './../../services/reguladorService/regulador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-regulador',
  templateUrl: './home-regulador.component.html',
  styleUrls: ['./home-regulador.component.css']
})
export class HomeReguladorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  createRegulador(): void {
    this.router.navigate(['/reguladores/create']);
  }
}
