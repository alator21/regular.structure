import {Man} from "./Man";


const man:Man = Man.create(['John'],['Garrett']);
man.greet();
man.doSomeAwesomeManThings()
man.printDetails();
man.changeName(['John','Marvin']);
man.printDetails();