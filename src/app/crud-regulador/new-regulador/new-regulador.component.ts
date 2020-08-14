import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReguladorService } from 'src/app/services/reguladorService/regulador.service';
import { ResponseApi } from 'src/app/models/response-api';
import { Regulador } from 'src/app/models/regulador.model';

@Component({
  selector: 'app-new-regulador',
  templateUrl: './new-regulador.component.html',
  styleUrls: ['./new-regulador.component.css']
})
export class NewReguladorComponent implements OnInit {

  regulador: Regulador = {
    
    code: '',
    region: '',
    feeder: '',
    bus: '',
    model: '',
    voltage: '',
    eCurrent: '',
    lVoltage: '',
    manufacturer: '',
    yearManufacture: '',
    dateEnergization: '',
    lastInspetion: '',
    lastUpdate: ''
  }

  constructor(private router: Router, 
              private reguladorService: ReguladorService) { }

  ngOnInit(): void {
  }

  create() {
      this.reguladorService.create(this.regulador).subscribe(() => {
      this.reguladorService.showMessage('Regulador Cadastrado!!!');
      this.router.navigate(['/reguladores']);
    })
  }

  cancel(): void {
    this.reguladorService.showMessage('Ação cancelada!!!');
    this.router.navigate(['/reguladores']);
  }
}
