import {Sex} from "../human/Sex";

export abstract class Animal {
    private readonly _height: number;
    private readonly _weight: number;
    private _runningSpeedPerKm: number;


    protected constructor(height: number, weight: number, runningSpeedPerKm: number) {
        this._height = height;
        this._weight = weight;
        this._runningSpeedPerKm = runningSpeedPerKm;
    }

    abstract communicate(): void;

    changeRunningSpeed(runningSpeedPerKm: number): void {
        this._runningSpeedPerKm = runningSpeedPerKm;
    }

    get weight(): number {
      return this._weight;
    }

    get height(): number {
        return this._height;
    }

    get runningSpeedPerKm(): number {
        return this._runningSpeedPerKm;
    }

    printDetails(): void {
        console.table({'height (CMs)': this._height, 'weight (KGs)' : this._weight, 'running speed(per KM)': this._runningSpeedPerKm});
    }
}