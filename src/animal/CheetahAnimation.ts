import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class CheetahAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): CheetahAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "  /\\_/\\           ",
                    " ( o.o )          ",
                    "  > ^ <           ",
                    " /|   |\\__        ",
                    "(_|___|___)~~~~~  "
                ],
                durationMs: 150
            },
            {
                content: [
                    "      /\\_/\\       ",
                    "     ( o.o )      ",
                    "      > ^ <       ",
                    "   __/|   |\\      ",
                    "  ~~~~~(___|___|) "
                ],
                durationMs: 150
            },
            {
                content: [
                    "          /\\_/\\   ",
                    "         ( >.< )  ",
                    "          > ^ <   ",
                    "        /|   |\\__ ",
                    "  ~~~~~(_|___|___)"
                ],
                durationMs: 150
            },
            {
                content: [
                    "              /\\_/\\",
                    "             ( o.o )",
                    "              > ^ < ",
                    "           /|   |\\  ",
                    "  ~~~~~~~~(_|___|_) "
                ],
                durationMs: 150
            }
        ];

        return new CheetahAnimation(frames, true);
    }
}
