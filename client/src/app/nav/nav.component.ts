import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model : any = {}

  constructor(protected _as: AccountService) {}

  ngOnInit(): void {
  }

  logout(){
    this._as.logout();
  }



  login(){
    this._as.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error=>console.log(error)
    })
  }

  clear(){
    localStorage.clear();
  }
} 
