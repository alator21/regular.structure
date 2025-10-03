import { AnimationFrame } from "./AnimationFrame";

export abstract class Animation {
    protected readonly _frames: AnimationFrame[];
    protected readonly _loop: boolean;

    protected constructor(frames: AnimationFrame[], loop: boolean = false) {
        this._frames = frames;
        this._loop = loop;
    }

    get frames(): AnimationFrame[] {
        return this._frames;
    }

    get loop(): boolean {
        return this._loop;
    }

    get totalFrames(): number {
        return this._frames.length;
    }
}
