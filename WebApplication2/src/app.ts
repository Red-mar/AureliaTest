import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';

import { HttpClient } from 'aurelia-fetch-client';

@inject(WebAPI, HttpClient)
export class App {
    router: Router;

    constructor(public api: WebAPI, private http: HttpClient) {
        this.configHttp();
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Contacts';
        config.map([
            { route: '', moduleId: 'no-selection', title: 'Select', name: 'home'},
            { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' },
            { route: 'test', moduleId: 'test', name: 'test' },
            { route: 'beheer', moduleId: 'beheer', name: 'beheer' },
            { route: 'beheerevent', moduleId: 'beheerevent', name: 'beheerevent' },
            { route: 'media', moduleId: 'media', name: 'media' },
            { route: 'toegangscontrole', moduleId: 'toegangscontrole', name: 'toegangscontrole' },
            { route: 'verhuur', moduleId: 'verhuur', name: 'verhuur' },
            { route: 'reservering', moduleId: 'reservering', name: 'reservering' },
            { route: 'login', moduleId: 'login', name: 'login' },
            { route: 'toegangscontrole', moduleId: 'toegangscontrole', name: 'toegangscontrole'}
        ]);

        this.router = router;
    }

    configHttp(): void {
        this.http.configure(config => {
            config
                .withBaseUrl('api/values/')
                .withDefaults({
                    method: "POST",
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response: Response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                });
        });
    }
}