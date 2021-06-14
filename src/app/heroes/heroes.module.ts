import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //lo que aqui se declara esta invisible para toda la aplicacion
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //visifles afuera de los modulos
    //exports sig. que cosas kiero aser publicas
    exports:[
        ListadoComponent
    ],
    //adentro van modulos
    imports:[
        CommonModule
    ]
})
export class HeroeModule {}