import { Sport } from "./Sport";
import { Type } from "./Type";

export class Football extends Sport {
    protected constructor(game: string, total: string) {
        super(game, total);
    }

    static create(game: string, total: string): Football {
        return new Football(game, total);
    }

    start() {
        console.log(`${Type.FOOTBALL}`);
        console.log(`Start the ${Type.FOOTBALL} game`);
    }

    finish() {
        console.log(`Finished the ${Type.FOOTBALL} game`);
    }
}
