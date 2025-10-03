import { AngryZombie } from "./AngryZombie";
import { FriendlyZombie } from "./FriendlyZombie";
import { Animator } from "../animation/Animator";
import { ZombieApocalypseAnimation } from "./ZombieApocalypseAnimation";

async function main() {
    console.log("=== Zombie Apocalypse Story ===\n");
    await Animator.play(ZombieApocalypseAnimation.create(), 1);

    console.log("\n=== Zombie Types ===");

    console.log("\n--- Angry Zombie ---");
    const angryZombie: AngryZombie = AngryZombie.create("EGYPT");
    angryZombie.printDetails();
    angryZombie.interactWithHuman();

    console.log("\n--- Friendly Zombie ---");
    const friendlyZombie: FriendlyZombie = FriendlyZombie.create("TOKYO");
    friendlyZombie.printDetails();
    friendlyZombie.interactWithHuman();
}

main();