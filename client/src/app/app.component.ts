import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Rolo Cheats!';

  constructor(private _as: AccountService){}


  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user: User = JSON.parse(userString);
    this._as.setCurrentUser(user);
  }
}
  