import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users: any;
  
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers();
  }


  regsiterToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users/').subscribe({
      next: response => {
        this.users = response;
        console.log(response);
      },
      error: () => console.log('Error occurred!'),
      complete: () => console.log('Request completed!')
    });
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
