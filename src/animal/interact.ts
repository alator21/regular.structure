import { Sex } from "../human/Sex";
import { Giraffe } from "./Giraffe";
import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { Cheetah } from "./Cheetah";
import { Animator } from "../animation/Animator";
import { CatAnimation } from "./CatAnimation";
import { DogAnimation } from "./DogAnimation";
import { GiraffeAnimation } from "./GiraffeAnimation";
import { CheetahAnimation } from "./CheetahAnimation";

async function main() {
    console.log("=== Cat ===");
    const cat: Cat = Cat.create(Sex.FEMALE, 25, 4, 30);
    cat.printDetails();
    cat.communicate();
    await Animator.play(CatAnimation.create(), 3);

    console.log("\n=== Dog ===");
    const dog: Dog = Dog.create(Sex.MALE, 60, 25, 25);
    dog.printDetails();
    dog.communicate();
    await Animator.play(DogAnimation.create(), 3);

    console.log("\n=== Giraffe ===");
    const giraffe: Giraffe = Giraffe.create(Sex.MALE, 610, 810, 50);
    giraffe.printDetails();
    giraffe.communicate();
    await Animator.play(GiraffeAnimation.create(), 2);

    console.log("\n=== Cheetah ===");
    const cheetah: Cheetah = Cheetah.create(Sex.FEMALE, 75, 60, 100);
    cheetah.printDetails();
    cheetah.communicate();
    await Animator.play(CheetahAnimation.create(), 2);
}

main();
