// toda clase tiene el decorador @
// un componente tiene tres partes el importacion, decorador y la clase

import {Component} from '@angular/core';

@Component({

    selector:'app-dashboard',
    template: '<h1>Hola mundo!</h1>',
    styles: ['h1{ color: red;}']

})

export class DashboardComponent {

}