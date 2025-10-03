import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class ShapeTransformAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): ShapeTransformAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "       Circle → Rectangle → Hexagon       ",
                    "                                          ",
                    "              ___                         ",
                    "            /     \\                       ",
                    "           |   O   |                      ",
                    "            \\_____/                       ",
                    "                                          "
                ],
                durationMs: 400
            },
            {
                content: [
                    "       Circle → Rectangle → Hexagon       ",
                    "                                          ",
                    "            _______                       ",
                    "           /       \\                      ",
                    "          |    O    |                     ",
                    "           \\_______/                      ",
                    "                                          "
                ],
                durationMs: 300
            },
            {
                content: [
                    "       Circle → Rectangle → Hexagon       ",
                    "                                          ",
                    "           ┌────────┐                     ",
                    "           │        │                     ",
                    "           │   O    │                     ",
                    "           │        │                     ",
                    "           └────────┘                     "
                ],
                durationMs: 400
            },
            {
                content: [
                    "       Circle → Rectangle → Hexagon       ",
                    "                                          ",
                    "           ┌────────┐                     ",
                    "          ╱          ╲                    ",
                    "          │    O     │                    ",
                    "          ╲          ╱                    ",
                    "           └────────┘                     "
                ],
                durationMs: 300
            },
            {
                content: [
                    "       Circle → Rectangle → Hexagon       ",
                    "              ____                        ",
                    "            /      \\                      ",
                    "           /        \\                     ",
                    "           \\    O   /                     ",
                    "            \\      /                      ",
                    "             \\____/                       "
                ],
                durationMs: 400
            },
            {
                content: [
                    "       Circle → Rectangle → Hexagon       ",
                    "             ______                       ",
                    "            /      \\                      ",
                    "           |        |                     ",
                    "           |   O    |                     ",
                    "            \\______/                      ",
                    "                                          "
                ],
                durationMs: 300
            },
            {
                content: [
                    "       Circle → Rectangle → Hexagon       ",
                    "                                          ",
                    "              ___                         ",
                    "            /     \\                       ",
                    "           |   O   |                      ",
                    "            \\_____/                       ",
                    "                                          "
                ],
                durationMs: 400
            }
        ];

        return new ShapeTransformAnimation(frames, true);
    }
}
