import { Computador } from "./Computador";

const computador1: Computador = new Computador ('3,3 GHz Intel Core i3-3220 (2 núcleos, 4 threads', 'Windows 11', 23600)
console.log(computador1.getProcessador());
console.log(computador1.getSistema());
console.log(computador1.getArmazenamento());
console.log(computador1.estudar('matemática'));
console.log(computador1.pesquisar());