import { Sex } from "../human/Sex";
import { Giraffe } from "./Giraffe";

const giraffe: Giraffe = Giraffe.create(Sex.MALE, 610, 810);
giraffe.printDetails();
giraffe.communicate();
