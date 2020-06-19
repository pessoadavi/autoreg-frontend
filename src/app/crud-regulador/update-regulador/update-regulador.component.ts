import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReguladorService } from 'src/app/services/reguladorService/regulador.service';
import { Regulador } from 'src/app/models/regulador.model';

@Component({
  selector: 'app-update-regulador',
  templateUrl: './update-regulador.component.html',
  styleUrls: ['./update-regulador.component.css']
})
export class UpdateReguladorComponent implements OnInit {

  constructor(
              private router: Router,
              private reguladorService: ReguladorService, 
              private route: ActivatedRoute
  ) { }

  regulador: Regulador
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.reguladorService.readById(id).subscribe(regulador => {
      this.regulador = regulador;
    });
  }

  update(): void {
    this.reguladorService.update(this.regulador).subscribe(responseApi => {
      this.regulador = responseApi
      this.reguladorService.showMessage("Regulador atualizado");
      this.router.navigate(['/reguladores']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
