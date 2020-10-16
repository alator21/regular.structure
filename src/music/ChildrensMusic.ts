import { Music } from "./Music";

export class ChildrensMusic extends Music {
  private static readonly GENRE: string = "Lullables";
  private static readonly SUBGENRE: string = "Sing-Alongs";

  protected constructor(genre: string, subGenre: string) {
    super(genre, subGenre);
  }

  static create(): ChildrensMusic {
    return new ChildrensMusic(ChildrensMusic.GENRE, ChildrensMusic.SUBGENRE);
  }
  play(): void {
    console.log(
      "Mary had a little lamb, little lamb, little lamb, mary had a little lamb..."
    );
  }
}
