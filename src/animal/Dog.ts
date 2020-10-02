import {Animal} from "./Animal";

export class Dog extends Animal {

    private constructor(height: number, runningSpeedPerKm: number) {
        super(height, runningSpeedPerKm);
    }

    static create(height: number, runningSpeedPerKm: number): Dog {
        return new Dog(height, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Yarr yarr serious yarr');
    }

}