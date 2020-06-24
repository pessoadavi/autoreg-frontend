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

  regulador: Regulador;
  CurrentId: number;

  constructor(
              private router: Router,
              private reguladorService: ReguladorService, 
              private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reguladorService.readById(id).subscribe(curretnRegulador => {
      this.regulador = curretnRegulador['data'];
      this.CurrentId = id;
    })
  }

  updateReg(): void {

  }

  cancel(): void {
    this.router.navigate(['/reguladores']);
  }

  
}
