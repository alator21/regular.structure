import { Animation } from "../animation/Animation";
import { AnimationFrame } from "../animation/AnimationFrame";

export class TennisAnimation extends Animation {
    private constructor(frames: AnimationFrame[], loop: boolean) {
        super(frames, loop);
    }

    static create(): TennisAnimation {
        const frames: AnimationFrame[] = [
            {
                content: [
                    "                    |                  ",
                    "   O                |                O ",
                    "  /|                |               /|\\ ",
                    "  / \\               |               / \\",
                    "   o                |                  ",
                    "==========================================",
                ],
                durationMs: 200
            },
            {
                content: [
                    "                    |                  ",
                    "   O                |                O ",
                    "  /|\\               |               /|\\ ",
                    "  / \\        o      |               / \\",
                    "                    |                  ",
                    "==========================================",
                ],
                durationMs: 150
            },
            {
                content: [
                    "                    |                  ",
                    "   O                |    o           O ",
                    "  /|\\               |               /|\\ ",
                    "  / \\               |               / \\",
                    "                    |                  ",
                    "==========================================",
                ],
                durationMs: 150
            },
            {
                content: [
                    "                    |         o        ",
                    "   O                |                O ",
                    "  /|\\               |                |\\",
                    "  / \\               |               / \\",
                    "                    |                  ",
                    "==========================================",
                ],
                durationMs: 150
            },
            {
                content: [
                    "                    |                  ",
                    "   O                |    o           O ",
                    "  /|\\               |               /| ",
                    "  / \\               |               / \\",
                    "                    |                  ",
                    "==========================================",
                ],
                durationMs: 150
            },
            {
                content: [
                    "                    |                  ",
                    "   O                |                O ",
                    "  /|\\       o       |               /|\\ ",
                    "  / \\               |               / \\",
                    "                    |                  ",
                    "==========================================",
                ],
                durationMs: 150
            },
            {
                content: [
                    "                    |                  ",
                    "   O     o          |                O ",
                    "  /|>               |               /|\\ ",
                    "  / \\               |               / \\",
                    "                    |                  ",
                    "==========================================",
                ],
                durationMs: 150
            },
            {
                content: [
                    "   o                |                  ",
                    "   O                |                O ",
                    "  /|\\               |               /|\\ ",
                    "  / \\               |               / \\",
                    "                    |                  ",
                    "==========================================",
                ],
                durationMs: 200
            }
        ];

        return new TennisAnimation(frames, true);
    }
}
