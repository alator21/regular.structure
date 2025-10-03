import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class CatAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): CatAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "    /\\_/\\  ",
                    "   ( o.o ) ",
                    "    > ^ <  ",
                    "   /|   |\\",
                    "  (_|   |_)"
                ],
                durationMs: 500
            },
            {
                content: [
                    "    /\\_/\\  ",
                    "   ( -.- ) ",
                    "    > ^ <  ",
                    "   /|   |\\",
                    "  (_|   |_)"
                ],
                durationMs: 300
            },
            {
                content: [
                    "    /\\_/\\  ",
                    "   ( o.o ) ",
                    "    > ^ <  ",
                    "   /|   |\\",
                    "  (_|   |_)"
                ],
                durationMs: 500
            }
        ];

        return new CatAnimation(frames, true);
    }
}
