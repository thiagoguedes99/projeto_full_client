import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpEndPointsService } from "app/providers/http-end-points.service";

@Injectable()
export class LoginServiceService {

  constructor(private http: Http, private httpUtil: HttpEndPointsService) { }

  logar() {
    let params = JSON.stringify(
			{ "username": 'usuario', "password": 'senha' });

      /*return this.http.post(this.httpUtil.(this.loginUrl), params, 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);*/
  }

}
