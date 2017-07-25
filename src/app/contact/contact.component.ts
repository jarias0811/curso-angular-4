import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent {
  public title = "Pagína de contacto de la web";
  public param;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(){
    //Utilizando arrow function se puede acceder al this.param, con function normal totea
    this._route.params.forEach((params:Params) => {
      this.param = params['page'];
    });
  }

  redirect(){
      this._router.navigate(['/contact','victorroblesweb.es']);//url,parametro
  }

  redirectHome(){
      this._router.navigate(['/home']);//url
  }
}
