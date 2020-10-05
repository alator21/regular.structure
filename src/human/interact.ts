import {Man} from "./Man";

import {
    Beef,
    Beans,
    Fish, Lettuce
} from './../Food/instance'


let man:Man = Man.create(['John'],['Garrett']);
man.greet();
man.doSomeAwesomeManThings()
man.printDetails();
man.changeName(['John','Marvin']);
man.printDetails();

// Human now can eat food...
man.eats(Beef)
man.eats(Fish)
man.eats(Beans)
man.eats(Lettuce)