import { Classical } from "./Classical";
import { ChildrensMusic } from "./ChildrensMusic";
import { Hiphop } from "./Hiphop";

let classical: Classical = Classical.create();

classical.printDetails();
classical.play();

let childrensMusic: ChildrensMusic = ChildrensMusic.create();

childrensMusic.printDetails();
childrensMusic.play();

let hiphop: Hiphop = Hiphop.create();

hiphop.printDetails();
hiphop.play();
