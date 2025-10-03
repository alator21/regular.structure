import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class RectangleAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): RectangleAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "           ",
                    "┌────────┐ ",
                    "│   []   │ ",
                    "└────────┘ ",
                    "           "
                ],
                durationMs: 300
            },
            {
                content: [
                    "           ",
                    " ┌────────┐",
                    " │   []   │",
                    " └────────┘",
                    "           "
                ],
                durationMs: 300
            },
            {
                content: [
                    "           ",
                    "  ┌────────",
                    "  │   []   ",
                    "  └────────",
                    "           "
                ],
                durationMs: 300
            }
        ];

        return new RectangleAnimation(frames, true);
    }
}
