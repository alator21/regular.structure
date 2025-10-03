import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class FootballAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): FootballAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "                                       ",
                    "       O                               ",
                    "      /|\\                              ",
                    "      / \\                              ",
                    "     ◯                                 ",
                    "  ==================                   ",
                    "                                       "
                ],
                durationMs: 300
            },
            {
                content: [
                    "                                       ",
                    "       O                               ",
                    "       |>                              ",
                    "      /                                ",
                    "     ◯                                 ",
                    "  ==================                   ",
                    "                                       "
                ],
                durationMs: 150
            },
            {
                content: [
                    "                                       ",
                    "       O                               ",
                    "       |\\                              ",
                    "      /    ◯                           ",
                    "                                       ",
                    "  ==================                   ",
                    "                                       "
                ],
                durationMs: 150
            },
            {
                content: [
                    "                                       ",
                    "       O         ◯                     ",
                    "      /|\\                              ",
                    "      /                                ",
                    "                                       ",
                    "  ==================                   ",
                    "                                       "
                ],
                durationMs: 150
            },
            {
                content: [
                    "              ◯                        ",
                    "       O                               ",
                    "      /|\\                              ",
                    "      / \\                              ",
                    "                                       ",
                    "  ==================                   ",
                    "                                       "
                ],
                durationMs: 150
            },
            {
                content: [
                    "                    ◯                  ",
                    "       O                               ",
                    "      /|\\                              ",
                    "      / \\                              ",
                    "                                       ",
                    "  ==================                   ",
                    "            GOAL!                      "
                ],
                durationMs: 400
            },
            {
                content: [
                    "                         ◯             ",
                    "       O   \\o/                         ",
                    "      /|\\                              ",
                    "      / \\                              ",
                    "                                       ",
                    "  ==================                   ",
                    "                                       "
                ],
                durationMs: 300
            }
        ];

        return new FootballAnimation(frames, true);
    }
}
