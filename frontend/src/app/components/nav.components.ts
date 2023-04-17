import {Component} from "@angular/core";
import { IMenu } from "../inerface";
import {AuthService} from "../pages/auth/auth.service";

@Component({
  selector:'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent {
  menu?:IMenu[]
  isCollapsed = false;
  constructor(public authService:AuthService) {
    this.menu=[
      {id:1, title:"Main",href:"/main"},
      {id:3, title:"Orders",href:"/orders"},
      {id:4, title:"Dashboard",href:"/dashboard"},
    ]
  }
}
