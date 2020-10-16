export abstract class Music {
  private _genre: string;
  private _subGenre: string;

  protected constructor(genre: string, subGenre: string) {
    this._genre = genre;
    this._subGenre = subGenre;
  }

  get genre(): string {
    return this._genre;
  }

  get subGenre(): string {
    return this._subGenre;
  }

  printDetails(): void {
    console.table({ genre: this._genre, subGenre: this._subGenre });
  }

  abstract play(): void;
}
