import {Animal} from "./Animal";

export class Giraffe extends Animal {
    private static readonly INITIAL_SPEED = 10;

    private constructor(height: number, weight: number, runningSpeedPerKm: number) {
        super(height, weight, runningSpeedPerKm);
    }

    static create(height: number, weight: number): Giraffe {
        return new Giraffe(height, weight, Giraffe.INITIAL_SPEED);
    }

    communicate(): void {
        console.error('Muah muah yes muah');
    }

}