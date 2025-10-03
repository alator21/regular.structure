import { Animation } from "./Animation";

export class Animator {
    static async play(animation: Animation, maxLoops: number = Infinity): Promise<void> {
        const frames = animation.frames;
        const loop = animation.loop;
        let loopCount = 0;

        do {
            for (const frame of frames) {
                this.clearScreen();
                this.renderFrame(frame.content);
                await this.sleep(frame.durationMs);
            }
            loopCount++;
        } while (loop && loopCount < maxLoops);
    }

    private static clearScreen(): void {
        console.clear();
    }

    private static renderFrame(content: string[]): void {
        content.forEach(line => console.log(line));
    }

    private static sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
