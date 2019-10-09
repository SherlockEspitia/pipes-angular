import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = 'Sherlock';
  fullname = 'victor miguel espitia gonzalez';
  arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 9 , 0 ];
  PI = Math.PI;
  a = 0.234;
  salario = 1500;
  heroe = {
    name: 'Xavier',
    nick: 'Doctor X',
    age: 68,
    location: {
      lng: 68,
      lat: 55
    }
  };
  vPromise = new Promise((res, rej) => {
    setTimeout(() => res('Llegaron los datos'), 3500 );
  });
  date = new Date();

  video = 'dXjKh66BR2U';
}
