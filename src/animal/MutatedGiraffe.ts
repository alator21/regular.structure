import { Sex } from "../human/Sex";
import { Animal } from "./Animal";

export class MutatedGiraffe extends Animal {
    private static readonly INITIAL_SPEED = 17;

    private constructor(sex: Sex, height: number, weight: number, runningSpeedPerKm: number) {
        super(sex, height, weight, runningSpeedPerKm);
    }

    static create(sex: Sex, height: number, weight: number): MutatedGiraffe {
        return new MutatedGiraffe(sex, height, weight, MutatedGiraffe.INITIAL_SPEED);
    }

    communicate(): void {
        console.error('grrrrrrrr mutant zzzzz');
    }

}
