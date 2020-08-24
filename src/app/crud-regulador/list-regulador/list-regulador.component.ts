import { ResponseApi } from 'src/app/models/response-api';
import { ReguladorService } from 'src/app/services/reguladorService/regulador.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Regulador } from 'src/app/models/regulador.model';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-regulador',
  templateUrl: './list-regulador.component.html',
  styleUrls: ['./list-regulador.component.css']
})
export class ListReguladorComponent implements OnInit {

  page:number = 0; // pagina atual (pageIndex)
  count:number = 10; // quantidade de itens listados na pagina (pagesize)
  pages:number; // quantidade total de paginas (totalPages)
  //pages:Array<number>; // quantidade total de paginas (totalPages)
  totalElements:number; //quantidade total de itens do DB (length)
  reguladores: Regulador[]
  displayedColumns = ['check','region','code', 'feeder', 'bus', 'model'/*, 'action*/]
  event: PageEvent;

  @Output()
  idFromCheckButton: EventEmitter<number> = new EventEmitter();

  constructor(private reguladorService: ReguladorService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll(this.page,this.count);
  
  }

  findAll(page:number,count:number) {
    this.reguladorService.read(page,count).subscribe((responseApi:ResponseApi) =>{
      this.reguladores = responseApi['data']['content']; // data: todas as infomaçoes de obj, paginação  etc. content: informação de cada obj listado 
      this.pages = responseApi['data'] ['totalPages']; // totalPages: numero total de paginas 
      //this.pages = new Array(responseApi['data'] ['totalPages']); // totalPages: numero total de paginas 
      this.totalElements = responseApi['data']['totalElements']; //totalElements: total de itens do DB
      console.log(responseApi);
      console.log(this.totalElements);
      console.log(this.pages);

   });
  }

  /* Método que guarda o valor de id de determinado regulador quando a caixa é selecionada */
  selectRegulador(id:number) {
    
    this.idFromCheckButton.emit(id);
    console.log(id);
  }

  /* Configuração da paginação do angular material */
  setPageEvent(event?:PageEvent) {
    this.count = event.pageSize;
    this.page = event.pageIndex;
    this.totalElements = event.length;
    this.findAll(this.page,this.count);
  }

 






  /*
  openDialogForDelete(id:any) {
    this.dialog.open(DeleteReguladorComponent);
    console.log(id); 
  }*/


  /* 
  Caso use os método abaixo para paginação em outra biblioteca de template precisa ativar as 
  linhas 18 e 39 e desativar as linhas correspondentes

  setPreviousPage(event:any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page -= this.page;
      this.findAll(this.page,this.count);
    }
  }

  setPage(i: number,event:any) {
    event.preventDefault();
    this.page = i;
    this.findAll(this.page,this.count);
  }

  setNextPage(event:any) {
    event.preventDefault();
    if(this.page+1 < this.pages.length) {
      this.page += this.page;
      this.findAll(this.page, this.count);
    }
  }*/

}
