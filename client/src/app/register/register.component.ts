import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private _as:AccountService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  register(){
    this._as.register(this.model).subscribe({
      next:response => {
        console.log(response);
        this.cancel();
      },
      error: error=>console.log(error)
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
