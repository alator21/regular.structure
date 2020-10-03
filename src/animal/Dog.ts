import {Animal} from "./Animal";

export class Dog extends Animal {

    private constructor(height: number, weight: number, runningSpeedPerKm: number) {
        super(height, weight, runningSpeedPerKm);
    }

    static create(height: number, weight: number, runningSpeedPerKm: number): Dog {
        return new Dog(height, weight, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Yarr yarr serious yarr');
    }

}