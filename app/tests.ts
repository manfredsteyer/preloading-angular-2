import './polyfills';
import './vendor';
//import './main';

import 'zone.js/dist/async-test.js';

// .spec.ts-Dateien explizit angeben
/*
import './flight-suchen/simple.spec';
import './flight-suchen/flight-suchen.spec';
import './flight-suchen/flight-suchen.http-mock.spec';
*/

// Alle .spec.ts-Dateien laden
var req = (<any>require).context('./', true, /spec\.ts$/);
req.keys().forEach(req);
