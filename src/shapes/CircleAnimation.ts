import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class CircleAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): CircleAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "    ___    ",
                    "  /     \\  ",
                    " |   O   | ",
                    "  \\_____/  ",
                    "           "
                ],
                durationMs: 300
            },
            {
                content: [
                    "     ___   ",
                    "   /     \\ ",
                    "  |   O   |",
                    "   \\_____/ ",
                    "           "
                ],
                durationMs: 300
            },
            {
                content: [
                    "      ___  ",
                    "    /     \\",
                    "   |   O   ",
                    "    \\_____/",
                    "           "
                ],
                durationMs: 300
            }
        ];

        return new CircleAnimation(frames, true);
    }
}
