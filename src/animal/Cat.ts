import { Sex } from "../human/Sex";
import { Animal } from "./Animal";

export class Cat extends Animal {

    private constructor(sex: Sex, height: number, weight: number, runningSpeedPerKm: number) {
        super(sex, height, weight, runningSpeedPerKm);
    }

    static create(sex: Sex, height: number, weight: number, runningSpeedPerKm: number): Cat {
        return new Cat(sex, height, weight, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Meow meow');
    }

    purr(): void {
        console.error("Purr purr");
    }

}
