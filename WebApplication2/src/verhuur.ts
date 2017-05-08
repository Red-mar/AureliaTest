class Materiaal {
    ID: number;
    Naam: string;
}

export class Verhuur {
    materialen;
    accountmateriaal;


    constructor() {
        var mat = new Materiaal();
        mat.ID = 1;
        mat.Naam = "USB";



        this.accountmateriaal = [mat, mat, mat, mat];

        this.materialen = [mat, mat, mat, mat];
    }
}