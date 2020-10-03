import {Animal} from "./Animal";

export class Cheetah extends Animal {

    private readonly _weight: number;

    get weight(): number {
      return this._weight;
    }

    private constructor(height: number, weight: number, runningSpeedPerKm: number) {
        super(height, runningSpeedPerKm);
        this._weight = weight;
    }

    static create(height: number, weight: number, runningSpeedPerKm: number): Cheetah {
        return new Cheetah(height, weight, runningSpeedPerKm);
    }

    communicate(): void {
        console.error('Roar.. roar...');
    }

}
