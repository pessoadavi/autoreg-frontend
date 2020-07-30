import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  CurrentId: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.readUserById(id).subscribe(CurrentUser => {
      this.user = CurrentUser['data'];
      this.CurrentId = id;
    })
  }

  updateUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      this.userService.showMessage('Usuário Atualizado!!!');
      this.router.navigate(['/usuarios']);
    })
  }

  cancel(): void {
    this.router.navigate(['/usuarios']);
  }

}
