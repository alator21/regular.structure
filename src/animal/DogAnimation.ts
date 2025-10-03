import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class DogAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): DogAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "    /^ ^\\    ",
                    "   / o o \\   ",
                    "   \\ > < /   ",
                    "    ) ~ (    ",
                    "   /|   |\\   ",
                    "  (_|   |_)  "
                ],
                durationMs: 400
            },
            {
                content: [
                    "    /^ ^\\    ",
                    "   / O O \\   ",
                    "   \\ W W /   ",
                    "    ) ~ (    ",
                    "   /|   |\\   ",
                    "  (_|   |_)  "
                ],
                durationMs: 200
            },
            {
                content: [
                    "    /^ ^\\    ",
                    "   / o o \\   ",
                    "   \\ U U /   ",
                    "    ) ~ (    ",
                    "  /  |   |  \\",
                    " (   |   |   )"
                ],
                durationMs: 400
            }
        ];

        return new DogAnimation(frames, true);
    }
}
