import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  nombre:string='ironman';
  edad: number=46;

  get nombrecapital():String{
    return this.nombre.toUpperCase();
  }

  obtenernombre():String{
    return`${this.nombre} - ${this.edad}`
  }

  cambiarnombre():void{
    this.nombre='spiderman'
  }

  cambiaredad():void{
    this.edad=21
  }
  constructor() { }

  ngOnInit(): void {
  }

}
