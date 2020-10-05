export abstract class Animal {

    private readonly _height: number;
    private _runningSpeedPerKm: number;


    protected constructor(height: number, runningSpeedPerKm: number) {
        this._height = height;
        this._runningSpeedPerKm = runningSpeedPerKm;
    }

    abstract communicate(): void;

    changeRunningSpeed(runningSpeedPerKm: number): void {
        this._runningSpeedPerKm = runningSpeedPerKm;
    }

    get height(): number {
        return this._height;
    }

    get runningSpeedPerKm(): number {
        return this._runningSpeedPerKm;
    }

    printDetails(): void {
        console.table({'height': this._height, 'running speed(per KM)': this._runningSpeedPerKm});
    }
}