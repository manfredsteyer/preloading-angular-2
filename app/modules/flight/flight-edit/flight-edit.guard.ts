import { Injectable} from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FlightEditComponent} from "./flight-edit.component";
import { Observable } from 'rxjs';

@Injectable()
export class FlightEditGuard implements CanDeactivate<FlightEditComponent> {

    canDeactivate(
        component: FlightEditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        return component.canDeactivate();

    }

}