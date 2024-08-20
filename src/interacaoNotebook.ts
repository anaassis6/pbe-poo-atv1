import { Notebook } from "./Notebook";

const note1: Notebook = new Notebook ('3,3 GHz Intel Core i3-3220 (2 núcleos, 4 threads', 'Windows 11', 23600)
console.log(note1.getProcessador());
console.log(note1.getSistema());
console.log(note1.getArmazenamento());
console.log(note1.jogar('The sims 4'));
console.log(note1.assistir('Netflix'));