import {Plant} from "./Plant";

export class Thallophyte extends Plant {
    private static readonly COLOR: string = "yellow";
    private static readonly ANCESTOR: string = "-";


    private constructor(color: string, ancestor: string) {
        super(color, ancestor);
    }

    static create(): Thallophyte {
        return new Thallophyte(Thallophyte.COLOR, Thallophyte.ANCESTOR);
    }

    photosynthesis(): void {
        console.log("bzzz bees go away oooozz")
    }

}