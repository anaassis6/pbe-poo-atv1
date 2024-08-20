import { Lixeira } from "./Lixeira";

const lixeira1:Lixeira = new Lixeira (4, 'Plástico', 'Amarelo');
console.log(lixeira1.getTamanho());
console.log(lixeira1.getMaterial());
console.log(lixeira1.getCor());
console.log(lixeira1.armazenar(15));
console.log(lixeira1.conscientizar());