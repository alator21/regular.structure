import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class ShapeCollisionAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): ShapeCollisionAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "                                      ",
                    "  ___                     ┌────────┐  ",
                    " /   \\                    │   []   │  ",
                    " \\___/                    └────────┘  ",
                    "                                      "
                ],
                durationMs: 200
            },
            {
                content: [
                    "                                      ",
                    "      ___              ┌────────┐     ",
                    "     /   \\             │   []   │     ",
                    "     \\___/             └────────┘     ",
                    "                                      "
                ],
                durationMs: 200
            },
            {
                content: [
                    "                                      ",
                    "          ___      ┌────────┐         ",
                    "         /   \\     │   []   │         ",
                    "         \\___/     └────────┘         ",
                    "                                      "
                ],
                durationMs: 200
            },
            {
                content: [
                    "                                      ",
                    "             ___┌────────┐            ",
                    "            /   │   []   │            ",
                    "            \\___└────────┘            ",
                    "                                      "
                ],
                durationMs: 200
            },
            {
                content: [
                    "              *** COLLISION ***       ",
                    "            ╔═══╗  ┌────────┐         ",
                    "            ║ ○ ║  │ ><[] │          ",
                    "            ╚═══╝  └────────┘         ",
                    "              *   *    *   *          "
                ],
                durationMs: 300
            },
            {
                content: [
                    "                                      ",
                    "        ___            ┌────────┐     ",
                    "       /   \\           │   []   │     ",
                    "       \\___/           └────────┘     ",
                    "      ←                        →      "
                ],
                durationMs: 200
            },
            {
                content: [
                    "                                      ",
                    "   ___                     ┌────────┐ ",
                    "  /   \\                    │   []   │ ",
                    "  \\___/                    └────────┘ ",
                    " ←                                  → "
                ],
                durationMs: 200
            },
            {
                content: [
                    "                                      ",
                    " ___                           ┌───── ",
                    "/   \\                          │   [] ",
                    "\\___/                          └───── ",
                    "                                      "
                ],
                durationMs: 200
            }
        ];

        return new ShapeCollisionAnimation(frames, false);
    }
}
