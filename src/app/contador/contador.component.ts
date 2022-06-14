import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
