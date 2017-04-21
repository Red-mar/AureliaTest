import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';
import { areEqual } from './utility';

import { EventAggregator } from 'aurelia-event-aggregator';
import { ContactUpdated, ContactViewed } from './message';

class Contact {
    firstName: string;
    lastName: string;
    email: string = "";
}

@inject(WebAPI, EventAggregator)
export class NoSelection {
    message = "Please Select a Contact.";
    contact: Contact = new Contact();
    newContact: Contact;

    constructor(private api: WebAPI, private ea: EventAggregator) {
    }

    get canSave() {
        return this.contact.firstName &&
            this.contact.lastName &&
            !this.api.isRequesting &&
            this.contact.email.search('@') > 0
    }

    save() {
        //this.contact = <Contact> await this.api.getContactDetails(1); async
        //this.ea.publish(new ContactViewed(this.contact));
        this.newContact = new Contact();
        this.newContact.email = this.contact.email;
        this.newContact.firstName = this.contact.firstName;
        this.newContact.lastName = this.contact.lastName;

        this.api.saveContact(this.newContact).then(contact => {
            this.newContact = <Contact>contact;
            this.ea.publish(new ContactUpdated(this.newContact));
        });
    }
}