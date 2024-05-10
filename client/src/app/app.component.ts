import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the 'HttpClient' class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Rolo Cheats!';
  users: any;

  constructor(private http: HttpClient){}


  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users/').subscribe({
      next: response => this.users = response,
      error: () => console.log('Error occurred!'),
      complete: () => console.log('Request completed!')
    });
  }
}
  