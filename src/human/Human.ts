import {Sex} from "./Sex";

export abstract class Human {
    private _name: string[];
    private _surname: string[];


    protected constructor(name: string[], surname: string[]) {
        this._name = name;
        this._surname = surname;
    }


    changeName(name: string[]) {
        this._name = name;
    }

    changeSurname(surname: string[]) {
        this._surname = surname;
    }


    abstract greet(): void;

    abstract sex(): Sex;


    get name(): string[] {
        return this._name;
    }

    get surname(): string[] {
        return this._surname;
    }

    printDetails(): void {
        console.table({'name': this._name.join(','), 'surname': this._surname.join(','), 'sex': Sex[this.sex()]});
    }
}
