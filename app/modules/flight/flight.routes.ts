
import {FlightEditGuard} from "./flight-edit/flight-edit.guard";
import {FlightEditComponent} from "./flight-edit/flight-edit.component";
import {PassengerSearchComponent} from "./passenger-search/passenger-search.component";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {AuthGuard} from "./flight-booking/auth.guard";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import {RouterModule, Routes } from '@angular/router';

const FLIGHT_ROUTES: Routes = [{
    path: '',
    component: FlightBookingComponent,
    canActivate: [AuthGuard],
    data: {
        protected: true
    },
    children: [
        {
            path: 'flug-suchen', // flight-buchen/flight-suchen
            component: FlightSearchComponent
        },
        {
            path: 'passagier-suchen',
            component: PassengerSearchComponent
        },
        {
            path: 'flight-edit/:id',
            component: FlightEditComponent,
            canDeactivate: [FlightEditGuard]
        }
    ]
}];

export const FLUG_ROUTE_PROVIDERS = [
    FlightEditGuard
];

export const FlightRouterModule = RouterModule.forChild(FLIGHT_ROUTES);