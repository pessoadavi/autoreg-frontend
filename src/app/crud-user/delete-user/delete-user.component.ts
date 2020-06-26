import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  usuario: User;
  CurrentId: number;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.readUserById(id).subscribe(CurrentId => {
      this.usuario = CurrentId['data'];
      this.CurrentId = id;
    })
  }

  deleteUserStanding(): void {
    this.userService.deleteUser(this.CurrentId).subscribe(() => {
      this.userService.showMessage("Usuário deletado");
      this.router.navigate(['/usuarios']);
    })
  }

  cancel():void {
    this.router.navigate(['/usuarios']);
  }
}
