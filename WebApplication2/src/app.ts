import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class App {
    router: Router;
    home = true;

    constructor(public api: WebAPI) { }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Contacts';
        config.map([
            { route: '', moduleId: 'no-selection', title: 'Select', name: 'home'},
            { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' },
            { route: 'test', moduleId: 'test', name: 'test' }
        ]);

        this.router = router;
    }

    select() {
        if (this.home) {
            this.home = false;
            return;
        }
        this.home = true;
    }
}