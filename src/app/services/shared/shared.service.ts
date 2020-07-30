import { BehaviorSubject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  public static instance: SharedService = null;
  user : User;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() { 
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn():boolean {
    if(this.user == null){
      return false;
    }
    return this.user.email != '';
  }
  
}


/* 
export class SharedService {

  user: User;
  token: string;

  private logicSourceTemplate = new BehaviorSubject<boolean>(true);
  currentLogic = this.logicSourceTemplate.asObservable();

  constructor() {}


  changeLogicTemplate(logic: boolean) {
    this.logicSourceTemplate.next(logic);
  }








}*/
