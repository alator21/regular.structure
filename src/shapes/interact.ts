import { Animator } from "../animation/Animator";
import { CircleAnimation } from "./CircleAnimation";
import { RectangleAnimation } from "./RectangleAnimation";
import { ShapeCollisionAnimation } from "./ShapeCollisionAnimation";
import { ShapeTransformAnimation } from "./ShapeTransformAnimation";

async function main() {
    console.log("=== Circle Movement ===");
    await Animator.play(CircleAnimation.create(), 2);

    console.log("\n=== Rectangle Movement ===");
    await Animator.play(RectangleAnimation.create(), 2);

    console.log("\n=== Shape Collision ===");
    await Animator.play(ShapeCollisionAnimation.create(), 1);

    console.log("\n=== Shape Transformation ===");
    await Animator.play(ShapeTransformAnimation.create(), 2);
}

main();
