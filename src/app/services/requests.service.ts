import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestsService {
  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getTest() {
    return 'Hello World from service';
  }

  getPosts() {
      //Itera los observables y los devuelve en formato json
    return this._http.get(this.url).map(response => response.json());
  }
}
