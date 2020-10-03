import {Animal} from "./Animal";

export class Cheetah extends Animal {

    private constructor(height: number, weight: number, runningSpeedPerKm: number) {
        super(height, weight, runningSpeedPerKm);
    }

    static create(height: number, weight: number, runningSpeedPerKm: number): Cheetah {
        return new Cheetah(height, weight, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Roar.. roar...');
    }

}
