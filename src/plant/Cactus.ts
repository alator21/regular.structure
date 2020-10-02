import {Plant} from "./Plant";

export class Cactus extends Plant {
    private static readonly COLOR: string = "green";
    private static readonly ANCESTOR: string = "Areoles";


    private constructor(color: string, ancestor: string) {
        super(color, ancestor);
    }

    static create(): Cactus {
        return new Cactus(Cactus.COLOR, Cactus.ANCESTOR);
    }

    photosynthesis(): void {
        console.log("uuuhh sunisgood hhhuuuu cactusissuperior uuuhh")
    }

}