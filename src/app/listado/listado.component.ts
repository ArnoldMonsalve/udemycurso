import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('constructor')
  }

  heroes:Array<string>= ['spiderman','ironman','hulk','thor','Fury']
  heroeborrado:string='';

  borraritem(){
    this.heroeborrado=this.heroes.shift() || '';

    //this.heroes=[]
    //shitf borra el primer elemento
    //this.heroes.pop()//borra el ultimo elemento
  }


}
