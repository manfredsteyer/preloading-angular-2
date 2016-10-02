import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTE_CONFIG, AppRoutesModule, APP_ROUTES_MODULE_PROVIDER} from "./app.routes";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeModule} from "./modules/home/home.module";
import {SharedModule} from "./modules/shared/shared.module";

const APP_PROVIDERS = [
    { provide: "BASE_URL", useValue: "http://www.angular.at" }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutesModule,
        HomeModule,
        SharedModule.forRoot()
    ],
    providers: [
        APP_PROVIDERS,
        APP_ROUTES_MODULE_PROVIDER
    ],
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule { 
}