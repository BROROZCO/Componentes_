// toda clase tiene el decorador @
// un componente tiene tres partes el importacion, decorador y la clase

import {Component} from '@angular/core';

@Component({

    selector:'app-dashboard',
    template: '<h1>Hola mundo!</h1>'

})

export class DashboardComponent {

}