import { Component } from '@angular/core';
import {FlightService} from "../services/flight.service";

@Component({
    template: require('./flight-booking.component.html'),
    providers: [FlightService]
})
export class FlightBookingComponent {
}