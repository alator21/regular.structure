import { Classical } from "./Classical";
import { ChildrensMusic } from "./ChildrensMusic";
import { Hiphop } from "./Hiphop";

const classical: Classical = Classical.create();

classical.printDetails();
classical.play();

const childrensMusic: ChildrensMusic = ChildrensMusic.create();

childrensMusic.printDetails();
childrensMusic.play();

const hiphop: Hiphop = Hiphop.create();

hiphop.printDetails();
hiphop.play();
