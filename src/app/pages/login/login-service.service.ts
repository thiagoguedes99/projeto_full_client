import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';

import { HttpUtilService } from './../../providers/http-util.service';
import { HttpEndPointsService } from "app/providers/http-end-points.service";

@Injectable()
export class LoginServiceService {

  constructor(private http: Http, private endPoint: HttpEndPointsService, private  httpUtil: HttpUtilService) { }

  logar() {
    let params = JSON.stringify(
			{ "username": 'usuario', "password": 'senha' });
		console.log('serviço');

      return this.http.post(this.endPoint.USER_LOGIN_POST, params, this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

}
