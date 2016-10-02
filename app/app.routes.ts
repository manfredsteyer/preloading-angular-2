import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./modules/home/home/home.component";
import {InfoComponent} from "./modules/home/info/info.component";
import {DashboardComponent} from "./modules/home/dashboard/dashboard.component";
import {LoginComponent} from "./modules/home/login/login.component";
import {CustomPreloadingStrategy} from "./custom-preloading-strategy";

export const ROUTE_CONFIG: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-buchen',
        loadChildren: './modules/flight/flight.module#FlightModule',
        data: { preload: false }
    },

    {
        path: 'info',
        component: InfoComponent,
        outlet: 'aux'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'aux'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'info',
        component: InfoComponent,
        outlet: 'aux'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'aux'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


//export const AppRoutesModule = RouterModule.forRoot(ROUTE_CONFIG, { preloadingStrategy: PreloadAllModules });
export const AppRoutesModule = RouterModule.forRoot(ROUTE_CONFIG, { preloadingStrategy: CustomPreloadingStrategy });
export const APP_ROUTES_MODULE_PROVIDER = [CustomPreloadingStrategy];

