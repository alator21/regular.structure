import { Sport } from "./Sport";
import { Type } from "./Type";

export class Basketball extends Sport {
    protected constructor(game: string, total: string) {
        super(game, total);
    }

    static create(game: string, total: string): Basketball {
        return new Basketball(game, total);
    }

    start() {
        console.log(`${Type.BASKETBALL}`);
        console.log(`Start the ${Type.BASKETBALL} game`);
    }

    finish() {
        console.log(`Finished the ${Type.BASKETBALL} game`);
    }
}
