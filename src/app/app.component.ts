import { UserService } from './services/userService/user.service';
import { SharedService } from './services/shared/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  showTemplate: boolean = false;
  public shared: SharedService;

  constructor(private userService: UserService) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }

  showContentWrapper(){
    return {
      'content-wrapper': this.shared.isLoggedIn()
    }
  }

  getMyStyles() {

      let myStyles = {
        'top': this.showTemplate ? '16px' : '0px',
        'left': this.showTemplate ? '220px' : '0px',
        'width': this.showTemplate ? '82%' : 'auto'
      };
      return myStyles;
  }

}




/* 
export class AppComponent {

  logic: boolean;
  public shared: SharedService;

  constructor(
      private userService: UserService,
      private sharedService: SharedService ){}
  
  ngOnInit() {
    //this.sharedService.currentLogic.subscribe(logic =>
      //this.logic = logic);
      //console.log(this.logic);
  }

}
*/
