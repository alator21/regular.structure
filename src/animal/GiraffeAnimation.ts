import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class GiraffeAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): GiraffeAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "      (o o)    ",
                    "       | |     ",
                    "       | |     ",
                    "       | |     ",
                    "      _| |_    ",
                    "     /     \\   ",
                    "    /  * *  \\  ",
                    "   |  o   o  | ",
                    "    \\   ^   /  ",
                    "     | | | |   ",
                    "     | | | |   "
                ],
                durationMs: 600
            },
            {
                content: [
                    "     (o o)     ",
                    "      | |      ",
                    "      | |      ",
                    "      | |      ",
                    "     _| |_     ",
                    "    /     \\    ",
                    "   /  * *  \\   ",
                    "  |  o   o  |  ",
                    "   \\   ^   /   ",
                    "    | | | |    ",
                    "    | | | |    "
                ],
                durationMs: 600
            }
        ];

        return new GiraffeAnimation(frames, true);
    }
}
