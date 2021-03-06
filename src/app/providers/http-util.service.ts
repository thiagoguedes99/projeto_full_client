import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpUtilService {

	//private API_URL: string = 'http://localhost:5000/api/';

	/*url(path: string) {
		return this.API_URL + path;
	}*/

	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		if (localStorage['token']) {
			headersParams['Authorization'] = localStorage['token'];
		}
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
      return options;
	}

	extrairDados(response: Response) {
		console.log('chegou no sucess');
    	let data = response.json();
    	return data || {};
  	}

  	processarErros(erro: any) {
		console.log('chegou no erro');
		console.log(erro);		  
	    return Observable.throw('Erro acessando servidor remoto.');
	}

}
