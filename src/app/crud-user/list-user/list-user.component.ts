import { User } from './../../models/user.model';
import { ResponseApi } from './../../models/response-api';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../services/userService/user.service';
import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  page: number = 0;
  count: number = 10;
  pages: number;
  totalElements: number;
  usuarios: User[];
  displayedColumns = ['check','email', 'profile'/*, 'action'*/]
  event: PageEvent

  @Output()
  idFromCheckButtom: EventEmitter<number> = new EventEmitter();

  constructor(private userService: UserService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll(this.page,this.count);
  }

  findAll(page:number, count: number) {
    this.userService.read(page,count).subscribe((responseApi:ResponseApi) => {
      this.usuarios = responseApi['data']['content'];
      this.pages = responseApi['data']['totalPages'];
      //this.pages = new Array(responseApi['data'] ['totalPages']); // totalPages: numero total de paginas 
      this.totalElements = responseApi['data']['totalElements'];

    });
  }

  /* Método que guarda o valor do id do usuário quando o check buttom for selecionado */
  selectUser(id: number) {
    this.idFromCheckButtom.emit(id);
  }


  /* Configuração da paginação do angular material */
  setPageEvent(event?:PageEvent) {
    this.count = event.pageSize;
    this.page = event.pageIndex;
    this.totalElements = event.length;
    this.findAll(this.page,this.count);
  }













}
