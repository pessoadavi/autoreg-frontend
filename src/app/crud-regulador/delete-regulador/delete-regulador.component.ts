import { ResponseApi } from './../../models/response-api';
import { ReguladorService } from 'src/app/services/reguladorService/regulador.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Regulador } from 'src/app/models/regulador.model';

@Component({
  selector: 'app-delete-regulador',
  templateUrl: './delete-regulador.component.html',
  styleUrls: ['./delete-regulador.component.css']
})
export class DeleteReguladorComponent implements OnInit {

  
  regulador: Regulador;
  id: number;

  constructor(private router: Router,
              private reguladorService: ReguladorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  }


  deleteRegulador(): void {}
   
}
