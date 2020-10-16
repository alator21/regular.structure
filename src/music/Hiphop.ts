import { Music } from "./Music";

export class Hiphop extends Music {
  private static readonly GENRE: string = "rap";
  private static readonly SUBGENRE: string = "christianRap";

  protected constructor(genre: string, subGenre: string) {
    super(genre, subGenre);
  }

  static create(): Hiphop {
    return new Hiphop(Hiphop.GENRE, Hiphop.SUBGENRE);
  }
  play(): void {
    console.log(
      "if ya wanna be cool go to school, dont be a fool, and remeber coding's cool yo"
    );
  }
}
