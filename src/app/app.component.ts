import { Component } from '@angular/core';
import { resolve, reject } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Alvaro';
  nombre2 = 'alvaro jose MANUEL letelier teiJeiro';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '123'
    }
  };
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llegó la data'), 3500);
  });
  fecha = new Date();
  video = 'bPZkSB-qEO0';
  activar = true;
}
