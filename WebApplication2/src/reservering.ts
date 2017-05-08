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

export class Reservering {
    accounts;

    constructor() {
        // TESTDATA
        var acc = new Account();
        acc.ID = 1;
        acc.Naam = 'Redmar';
        acc.Password == 'geheim';
        acc.Plaats = 'Amsterdam';
        acc.Postcode = 'yoppiesaus';
        acc.Straat = 'superstraat';
        acc.Huisnummer = 5;

        this.accounts = [acc, acc, acc, acc];
    }
}