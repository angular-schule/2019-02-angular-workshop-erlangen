export class Test {

    constructor(public antwort: string) {
    }

    istErfurtSchoen() {
        let callback = () => {
            console.log('Das Ergebnis lautet: ' + this.antwort);
        }
        return callback;
    }
}

const hallo = "string";

