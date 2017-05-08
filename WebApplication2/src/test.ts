import { TestEvent } from './message';
import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

import { EventAggregator } from 'aurelia-event-aggregator';

class Contact {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

class Account {
    ID: number;
    Naam: string;
    Plaats: string;
    Straat: string;
    Huisnummer: number;
    Postcode: string;
    Email: string;
    Password: string;
}

@inject(EventAggregator, HttpClient, json)
export class Test {
    message = 'This is a test page';
    c: Contact;

    constructor(private ea: EventAggregator, private http: HttpClient) {

    }

    test() {
        this.ea.publish(new TestEvent('Bericht van test class'));
    }

    async activate() {

    }

    async getContacts() {
        let data: Response = await this.http.fetch('Values');
        let x = await data.json();
        this.message = x.toString();
    }

    async getContact() {
        let data: Response = await this.http.fetch('GetContact', {
            body: json('1')
        });

        let x = await data.json();
        this.message = x.firstName + " " + x.lastName + " " + x.email + " " + x.phoneNumber;
    }

    async addContact(firstName: string, lastName: string, email: string, phoneNumber: string) {
        this.c = new Contact();
        this.c.firstName = firstName;
        this.c.lastName = lastName;
        this.c.email = email;
        this.c.phoneNumber = phoneNumber;
        
        await this.http.fetch('AddContact', {
            body: json(this.c)
        });
        this.activate();
    }

    async getAccount() {
        let data: Response = await this.http.fetch('GetAccount', {
            body: json('2')
        });

        let x = await data.json();
        this.message = x.naam + x.email;
    }

    /*
    async getValues() {
        let data: Response = await this.http.fetch('Values');
        let x = await data.json();
        this.message = x.toString();
    }

    async getValue() {
        let data: Response = await this.http.fetch('GetValue', {
            body: json('0')
        });

        let x = await data.json();
        this.message = x.x;
    }

    async getNumber() {
        let data: Response = await this.http.fetch('Numbers');
        let x = await data.json();
        this.message = x.toString();
    }

    async addValue(val: string) {
        await this.http.fetch('AddValue', {
            body: json(val)
        });
        this.activate();
    }

    async addNumber(val: number) {
        await this.http.fetch('AddNumber', {
            body: json(val)
        });
        this.activate();
    }
    */
    
}