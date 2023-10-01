import { Sex } from "../human/Sex";
import { Animal } from "./Animal";

export class Dog extends Animal {

    private constructor(sex: Sex, height: number, weight: number, runningSpeedPerKm: number) {
        super(sex, height, weight, runningSpeedPerKm);
    }

    static create(sex: Sex, height: number, weight: number, runningSpeedPerKm: number): Dog {
        return new Dog(sex, height, weight, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Yarr yarr serious yarr');
    }

}
