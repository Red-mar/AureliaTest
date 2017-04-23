import { WebAPI } from './web-api';
import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

import { EventAggregator } from 'aurelia-event-aggregator';
import { ContactUpdated, ContactViewed, TestEvent } from './message';

@inject(WebAPI, EventAggregator, HttpClient, json)
export class ContactList {
    contacts;
    selectedId = 0;

    constructor(private api: WebAPI, private ea: EventAggregator, private http: HttpClient) {
        ea.subscribe(TestEvent, msg => alert(msg.message));
        ea.subscribe(ContactViewed, msg => this.select(msg.contact));
        ea.subscribe(ContactUpdated, async msg => {

            //this.api.getContactList().then(contacts => this.contacts = contacts);
            let data: Response = await this.http.fetch('GetContacts');

            let x = await data.json();
            this.contacts = x;


            //let id = msg.contact.id;
            //let found = this.contacts.find(x => x.id == id);

            // Found is undefined ?
            //Object.assign(found, msg.contact);
        });
    }

    async created() {
        //this.api.getContactList().then(contacts => this.contacts = contacts);
        let data: Response = await this.http.fetch('GetContacts');

        let x = await data.json();
        this.contacts = x;
    }

    select(contact) {
        this.selectedId = contact.id;
        return true;
    }
}