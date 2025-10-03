import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class BasketballAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): BasketballAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "                    |‾‾‾|              ",
                    "                    |   |              ",
                    "                    |___|              ",
                    "                     | |               ",
                    "                                       ",
                    "      O                                ",
                    "     /|\\                               ",
                    "     / \\                               ",
                    "    (o)                                "
                ],
                durationMs: 300
            },
            {
                content: [
                    "                    |‾‾‾|              ",
                    "                    |   |              ",
                    "                    |___|              ",
                    "                     | |               ",
                    "                                       ",
                    "      O                                ",
                    "      |\\    (o)                        ",
                    "     / \\                               ",
                    "                                       "
                ],
                durationMs: 200
            },
            {
                content: [
                    "                    |‾‾‾|              ",
                    "                    |   |              ",
                    "                    |___|              ",
                    "                     | |               ",
                    "              (o)                      ",
                    "      O                                ",
                    "      |                                ",
                    "     / \\                               ",
                    "                                       "
                ],
                durationMs: 200
            },
            {
                content: [
                    "                    |‾‾‾|              ",
                    "                    | o |              ",
                    "                    |___|              ",
                    "                     | |               ",
                    "                                       ",
                    "       O                               ",
                    "       |                               ",
                    "      / \\                              ",
                    "                                       "
                ],
                durationMs: 250
            },
            {
                content: [
                    "                    |‾‾‾|              ",
                    "                    |   |   SWISH!     ",
                    "                    |_o_|              ",
                    "                     | |               ",
                    "                                       ",
                    "       O   \\o/                         ",
                    "       |                               ",
                    "      / \\                              ",
                    "                                       "
                ],
                durationMs: 400
            },
            {
                content: [
                    "                    |‾‾‾|              ",
                    "                    |   |              ",
                    "                    |___|              ",
                    "                     |o|               ",
                    "                                       ",
                    "       O                               ",
                    "      /|\\                              ",
                    "      / \\                              ",
                    "                                       "
                ],
                durationMs: 300
            }
        ];

        return new BasketballAnimation(frames, true);
    }
}
