import { Animation } from "./Animation";

export class Animator {
    static async play(animation: Animation): Promise<void> {
        const frames = animation.frames;
        const loop = animation.loop;

        do {
            for (const frame of frames) {
                this.clearScreen();
                this.renderFrame(frame.content);
                await this.sleep(frame.durationMs);
            }
        } while (loop);
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
