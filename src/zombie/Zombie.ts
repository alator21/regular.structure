export abstract class Zombie {
    private readonly _currentRegion: string;
    private readonly _numberOfYearsPerSleep: number;


    protected constructor(currentRegion: string, numberOfYearsPerSleep: number) {
        this._currentRegion = currentRegion;
        this._numberOfYearsPerSleep = numberOfYearsPerSleep;
    }

    abstract interactWithHuman(): void;


    get currentRegion(): string {
        return this._currentRegion;
    }

    get numberOfYearsPerSleep(): number {
        return this._numberOfYearsPerSleep;
    }

    printDetails(): void {
        console.table({'region': this._currentRegion, 'years spent per sleep': this._numberOfYearsPerSleep});
    }
}