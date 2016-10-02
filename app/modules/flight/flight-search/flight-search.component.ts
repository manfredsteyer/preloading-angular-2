import {FormGroupDirective} from "@angular/forms";
import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {FlightService} from "../services/flight.service";
import {Flug} from "../../../entities/flug";
import {AuthService} from "../../shared/auth/auth.service";
import {ActivatedRoute } from '@angular/router';

@Component({
    selector: 'flug-suchen',
    template: require('./flight-search.component.html'),
    providers: [],
    styles: [require('./flight-search.component.css')]
})
export class FlightSearchComponent {

    public von: string = "";
    public nach: string = "";
    public datum: string = (new Date()).toISOString();

    public selectedFlug: Flug;

    public expertMode = false;

    constructor(private activeRoute: ActivatedRoute, private flugService: FlightService, private authService: AuthService) {
        this.von = authService.city;
        var that = this;
        this.activeRoute.queryParams.subscribe(p => {
            this.expertMode = !!p['expertMode'];
        });
    }

    public get fluege() { // comp.fluege
        return this.flugService.fluege;
    }

    suchen() {

        return new Promise((resolve, reject) => {

            this
                .flugService
                .find(this.von, this.nach)
                .subscribe(
                    (fluege: Flug[]) => {
                        resolve(fluege);
                    },
                    (err) => {
                        console.error("Fehler beim Laden von Flügen!!");
                        console.error(err);
                        reject(err);
                    }
                );

        });

    }

    select(flug: Flug): void {
        this.selectedFlug = flug;
    }

}

