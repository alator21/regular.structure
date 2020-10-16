import { Music } from "./Music";

export class Classical extends Music {
  private static readonly GENRE: string = "chamberMusic";
  private static readonly SUBGENRE: string = "stringQuartet";

  protected constructor(genre: string, subGenre: string) {
    super(genre, subGenre);
  }

  static create(): Classical {
    return new Classical(Classical.GENRE, Classical.SUBGENRE);
  }

  play(): void {
    console.log("**classical Mozart music playing on piano**");
  }
}
