import { Sport } from "./Sport";
import { Type } from "./Type";

export class Tennis extends Sport {
    protected constructor(game: string, total: string) {
        super(game, total);
    }

    static create(game: string, total: string): Tennis {
        return new Tennis(game, total);
    }

    start() {
        console.log(`${Type.TENNIS}`);
        console.log(`Start the ${Type.TENNIS} game`);
    }

    finish() {
        console.log(`Finished the ${Type.TENNIS} game`);
    }
}
