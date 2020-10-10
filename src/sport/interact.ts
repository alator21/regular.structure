import { Football } from "./Football";
import { Basketball } from "./Basketball";
import { Tennis } from "./Tennis";

const football: Football = Football.create('Football', '1 : 1');
const basketball: Basketball = Basketball.create('Basketball', '102 : 80');
const tennis: Tennis = Tennis.create('Tennis', '2:1');

football.start();
football.finish();
football.printDetails();

basketball.start();
basketball.finish();
basketball.printDetails();

tennis.start();
tennis.finish();
tennis.printDetails();