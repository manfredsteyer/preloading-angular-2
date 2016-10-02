import { Component  } from '@angular/core';
import {FlightService} from "../../flight/services/flight.service";

@Component({
    template: `
        <h2>{{info}}</h2>
    `
})
export class InfoComponent {

    info = "Info!";

    constructor() {
    }


}