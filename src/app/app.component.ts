import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FSD';
  User = {
    username : '',
    password : ''
  };
  userVerify(){
    alert("Login Successful");
  }
}
