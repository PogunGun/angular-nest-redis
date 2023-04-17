import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { IUser } from 'src/app/inerface';
import { UsersService } from './users.service';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit{
  users$?: Observable<IUser[]>
  size: any;
  constructor(
    private readonly usersService: UsersService,
    private readonly router:Router
  ) {
  }
  ngOnInit():void {
    console.log('init')
    this.users$ = this.usersService.getAllUsers()
  }
  delete(id: number) {
    if (confirm('Delete user?')) {
      this.usersService.deleteUser(id).subscribe(_ => {
        // this.router.navigate(['/users'])
      })
    }
  }
}
