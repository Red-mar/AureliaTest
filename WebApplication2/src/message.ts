export class ContactUpdated {
    constructor(public contact) { }
}

export class ContactViewed {
    constructor (public contact) { }
}

export class TestEvent {
    constructor(public message) {
    }
}