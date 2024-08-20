import { Banco } from "./Banco";

const banco1:Banco = new Banco ('1m', 'Madeira', 15);
console.log(banco1.getTamanho());
console.log(banco1.getMaterial());
console.log(banco1.getPeso());
console.log(banco1.sentar());
console.log(banco1.descansar(50));