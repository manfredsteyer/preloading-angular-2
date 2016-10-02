import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Flug} from "../../../entities/flug";

@Component({
    selector: 'flug-card',
    template: require('./flight-card.component.html')
})
export class FlightCardComponent {

    @Input('item') flug: Flug;
    @Input() selectedItem: Flug;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItemChange.emit(this.flug);
    }
}