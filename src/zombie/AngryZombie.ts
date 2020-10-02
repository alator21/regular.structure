import {Zombie} from "./Zombie";

export class AngryZombie extends Zombie {
    private static readonly YEARS_PER_SLEEP: number = 6.5;

    private constructor(currentRegion: string, numberOfYearsPerSleep: number) {
        super(currentRegion, numberOfYearsPerSleep);
    }

    static create(currentRegion: string): AngryZombie {
        return new AngryZombie(currentRegion, AngryZombie.YEARS_PER_SLEEP);
    }

    interactWithHuman(): void {
        console.log(`come here filthy human, i will kill you UAGHHH`);
    }

}