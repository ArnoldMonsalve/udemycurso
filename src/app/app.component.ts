import { Component } from '@angular/core';

//decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Udemy';
  tituloApp:string='Contador App'
  numero:number=5;
  base: number=5;
  newBase:number=0;

  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

  acumular(valor:number){
    this.numero += valor;
  }

  valorBase(){
    this.base=this.newBase
  }
}
