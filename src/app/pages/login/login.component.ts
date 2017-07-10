import { LoginServiceService } from './login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginServiceService]
})
export class LoginComponent implements OnInit {

  constructor( private service: LoginServiceService) { }

  ngOnInit() {
    console.log('chmou o serviço');
    this.logar();
  }

  logar() {
    this.service.logar().subscribe(
      resp => console.log(resp),
      err => console.log(err),      
    );
  }

}
