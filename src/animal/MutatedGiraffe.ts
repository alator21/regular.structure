import {Animal} from "./Animal";

export class MutatedGiraffe extends Animal {
    private static readonly INITIAL_SPEED = 17;

    private constructor(height: number, weight: number, runningSpeedPerKm: number) {
        super(height, weight, runningSpeedPerKm);
    }

    static create(height: number, weight: number): MutatedGiraffe {
        return new MutatedGiraffe(height, weight, MutatedGiraffe.INITIAL_SPEED);
    }

    communicate(): void {
        console.error('grrrrrrrr mutant zzzzz');
    }

}