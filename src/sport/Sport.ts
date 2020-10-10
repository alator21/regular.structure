export abstract class Sport {
    protected _game: string;
    protected _total: string;

    protected constructor(game: string, total: string) {
        this._game = game;
        this._total = total;
    }

    abstract start(): void;
    
    abstract finish(): void;

    get game(): string {
        return this._game;
    }

    get total(): string {
        return this._total;
    }

    printDetails(): void {
        console.table({'game': this._game, 'total': this._total});
    }

}