import { ReguladorService } from 'src/app/services/reguladorService/regulador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-regulador',
  templateUrl: './delete-regulador.component.html',
  styleUrls: ['./delete-regulador.component.css']
})
export class DeleteReguladorComponent implements OnInit {

  constructor(private router: Router, private reguladorService: ReguladorService) { }

  ngOnInit(): void {
  }

}
