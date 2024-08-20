import { Arvore } from "./Arvore";

const Arvore1:Arvore = new Arvore (13, 'Salgueiro', 30);
console.log(Arvore1.getTamanho());
console.log(Arvore1.getEspecie());
console.log(Arvore1.getIdade());
console.log(Arvore1.fotossintese());
console.log(Arvore1.sombra());