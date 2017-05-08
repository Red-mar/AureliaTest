class Event {
    ID: number;
    Naam: string;
    Plaats: string;
}

export class Toegangscontrole {
    events;

    constructor() {
        // TESTDATA
        var event = new Event();
        event.ID = 1;
        event.Naam = 'Superevent';
        event.Plaats = 'Amsterdam';

        this.events = [event, event, event, event];
    }
}