import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {PassengerSearchComponent} from "./passenger-search/passenger-search.component";
import {FlightService} from "./services/flight.service";
import {FlightCardComponent} from "./flight-search/flight-card.component";
import {FlightEditComponent} from "./flight-edit/flight-edit.component";
import {RouterModule} from "@angular/router";
import {FlightRouterModule, FLUG_ROUTE_PROVIDERS} from "./flight.routes";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FlightRouterModule, SharedModule],
    declarations: [FlightBookingComponent, FlightCardComponent, FlightSearchComponent, PassengerSearchComponent, FlightEditComponent],
   // exports: [FlightBookingComponent, FlightSearchComponent, FlugSuchenReactiveComponent, PassengerSearchComponent, FlightEditComponent],
    providers: [FlightService, FLUG_ROUTE_PROVIDERS]
})
export class FlightModule {
}



