import { Sapo } from "./Sapo";

const sapo1: Sapo = new Sapo (10, 'Ponta de Flecha', 'Rosa');
console.log(sapo1.getTamanho());
console.log(sapo1.getEspecie());
console.log(sapo1.getCor());
console.log(sapo1.comerInsetor());
console.log(sapo1.pular());