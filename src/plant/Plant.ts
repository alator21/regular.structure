export abstract class Plant {
    private readonly _color: string;
    private readonly _ancestor: string;


    protected constructor(color: string, ancestor: string) {
        this._color = color;
        this._ancestor = ancestor;
    }

    abstract photosynthesis(): void;


    get color(): string {
        return this._color;
    }

    get ancestor(): string {
        return this._ancestor;
    }

    printDetails(): void {
        console.table({'color': this._color, 'ancestor': this._ancestor});
    }
}