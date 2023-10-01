import { Sex } from "../human/Sex";
import { Animal } from "./Animal";

export class Cheetah extends Animal {

    private constructor(sex: Sex, height: number, weight: number, runningSpeedPerKm: number) {
        super(sex, height, weight, runningSpeedPerKm);
    }

    static create(sex: Sex, height: number, weight: number, runningSpeedPerKm: number): Cheetah {
        return new Cheetah(sex, height, weight, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Roar.. roar...');
    }

}
