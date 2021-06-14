import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

  heroes: string [] = ['spiderman', 'perro', 'hhh', 'dfjj'];

  heroeBorrado: string = '';



  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
