import { Human } from "./Human";
import { Sex } from "./Sex";

export class Ork extends Human {
  protected constructor(name: string[], surname: string[], sex: Sex) {
    super(name, surname, sex);
  }

  static create(name: string[], surname: string[], sex: Sex): Ork {
    return new Ork(name, surname, sex);
  }

  doSomeAwesomeManThings(): void {
    console.table([
        `Fight`,
        `Being stupid`
    ]);
  }

  greet(): void {
      console.log('Throm-ka');
  }
}
