import { Animal } from "./Animal";

export class Dragon extends Animal {
  private constructor(height: number, weight: number, runningSpeedPerKm: number, horns) {
    super(height, weight, runningSpeedPerKm);
    this.horns = horns
  }

  horns: number

  static create(height: number, weight: number, runningSpeedPerKm: number, horns: number): Dragon {
    return new Dragon(height, weight, runningSpeedPerKm, horns);
  }

  communicate(): void {
    console.error('Roars');
  }

  dracarys(): void {
    console.error('Breathing fire')
  }
}
