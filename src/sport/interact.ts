import { Football } from "./Football";
import { Basketball } from "./Basketball";
import { Tennis } from "./Tennis";
import { Animator } from "../animation/Animator";
import { BasketballAnimation } from "./BasketballAnimation";
import { FootballAnimation } from "./FootballAnimation";
import { TennisAnimation } from "./TennisAnimation";

async function main() {
    console.log("=== Basketball ===");
    const basketball: Basketball = Basketball.create('Basketball', '102 : 80');
    basketball.start();
    basketball.finish();
    basketball.printDetails();
    await Animator.play(BasketballAnimation.create(), 2);

    console.log("\n=== Football ===");
    const football: Football = Football.create('Football', '1 : 1');
    football.start();
    football.finish();
    football.printDetails();
    await Animator.play(FootballAnimation.create(), 2);

    console.log("\n=== Tennis ===");
    const tennis: Tennis = Tennis.create('Tennis', '2:1');
    tennis.start();
    tennis.finish();
    tennis.printDetails();
    await Animator.play(TennisAnimation.create(), 3);
}

main();