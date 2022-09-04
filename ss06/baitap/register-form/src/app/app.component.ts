import { Component } from '@angular/core';
import {IUser} from "./iuser";
import {UserDao} from "./Dao/UserDao";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user:IUser[]=UserDao.user;
  title = 'register-form';

}
