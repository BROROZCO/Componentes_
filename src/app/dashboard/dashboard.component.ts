// toda clase tiene el decorador @
// un componente tiene tres partes el importacion, decorador y la clase

import {Component} from '@angular/core';

@Component({

    selector:'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent {

}