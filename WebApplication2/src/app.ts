import { Router, RouterConfiguration } from 'aurelia-router';

export class App {

    router: Router;
    constructor() {
        
    }

    configureRouter(config: RouterConfiguration, router: Router) {

        config.title = 'Contacts';
        config.map([
            { route: ['', 'home'], moduleId: 'no-selection', title: 'Select'},
            { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts'}
        ]);
        config.mapUnknownRoutes('./app');
        

        this.router = router;

        console.log(router);
        console.log(config);
    }
}