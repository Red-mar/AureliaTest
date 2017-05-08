class Comment {
    ID: number;
    text: string;
}

export class Media {
    comments;

    constructor() {
        var com = new Comment();
        com.ID = 1;
        com.text = "dit is een comment";

        this.comments = [com, com, com, com];
    }
}