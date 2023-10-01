import { Sex } from "../human/Sex";
import { Animal } from "./Animal";

export class Giraffe extends Animal {
    private static readonly INITIAL_SPEED = 10;

    private constructor(sex: Sex, height: number, weight: number, runningSpeedPerKm: number) {
        super(sex, height, weight, runningSpeedPerKm);
    }

    static create(sex: Sex, height: number, weight: number): Giraffe {
        return new Giraffe(sex, height, weight, Giraffe.INITIAL_SPEED);
    }

    communicate(): void {
        console.error('Muah muah yes muah');
    }

}
