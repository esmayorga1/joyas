import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 products = [
   { 
     name : 'Juan',
     country: 'Colombia',
     age: 25
  },

  { 
    name : 'Gina',
    country: 'Holanda',
    age: 20
 }
 ]

 nombres = 'sebastian';


}
