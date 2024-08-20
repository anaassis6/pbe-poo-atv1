import { Microondas } from "./Microondas";

const Microondas1: Microondas = new Microondas ('Panasonic', 900 , 34);
console.log(Microondas1.getMarca());
console.log(Microondas1.getPotencia());
console.log(Microondas1.getTamanho());
console.log(Microondas1.esquentar());
console.log(Microondas1.cozinhar(`brócolis`, 7));