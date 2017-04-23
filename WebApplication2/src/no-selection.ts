import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';
import { areEqual } from './utility';

import { EventAggregator } from 'aurelia-event-aggregator';
import { ContactUpdated, ContactViewed } from './message';
import { HttpClient, json } from 'aurelia-fetch-client';

class Contact {
    firstName: string;
    lastName: string;
    email: string = "";
    phoneNumber: string;
}

@inject(WebAPI, EventAggregator, HttpClient, json)
export class NoSelection {
    message = "Please Select a Contact.";
    contact: Contact = new Contact();
    newContact: Contact;

    constructor(private api: WebAPI, private ea: EventAggregator, private http: HttpClient) {
    }

    get canSave() {
        return this.contact.firstName &&
            this.contact.lastName &&
            this.contact.email.search('@') > 0
    }

    async save() {
        //this.contact = <Contact> await this.api.getContactDetails(1); async

        this.newContact = new Contact();
        this.newContact.email = this.contact.email;
        this.newContact.firstName = this.contact.firstName;
        this.newContact.lastName = this.contact.lastName;
        this.newContact.phoneNumber = "test";

        await this.http.fetch('AddContact', {
            body: json(this.newContact)
        });

        this.ea.publish(new ContactUpdated(this.newContact));
    }
}