import { WebAPI } from './web-api';
import { inject } from 'aurelia-framework';

import { EventAggregator } from 'aurelia-event-aggregator';
import { ContactUpdated, ContactViewed, TestEvent } from './message';

@inject(WebAPI, EventAggregator)
export class ContactList {
    contacts;
    selectedId = 0;

    constructor(private api: WebAPI, private ea: EventAggregator) {
        ea.subscribe(TestEvent, msg => alert(msg.message));
        ea.subscribe(ContactViewed, msg => this.select(msg.contact));
        ea.subscribe(ContactUpdated, msg => {

            this.api.getContactList().then(contacts => this.contacts = contacts);

            let id = msg.contact.id;
            let found = this.contacts.find(x => x.id == id);

            // Found is undefined ?
            //Object.assign(found, msg.contact);
        });
    }

    created() {
        this.api.getContactList().then(contacts => this.contacts = contacts);
    }

    select(contact) {
        this.selectedId = contact.id;
        return true;
    }
}