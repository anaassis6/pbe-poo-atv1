import { Biblioteca } from "./Biblioteca";

const Biblioteca1: Biblioteca = new Biblioteca (35, 1000, 34)
console.log(Biblioteca1.getTamanho());
console.log(Biblioteca1.getLivros());
console.log(Biblioteca1.getPessoas());
console.log(Biblioteca1.estudar('filosofia'));
console.log(Biblioteca1.jogar('xadrez'));