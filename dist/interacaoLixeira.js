"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lixeira_1 = require("./Lixeira");
const lixeira1 = new Lixeira_1.Lixeira(4, 'Plástico', 'Amarelo');
console.log(lixeira1.getTamanho());
console.log(lixeira1.getMaterial());
console.log(lixeira1.getCor());
console.log(lixeira1.armazenar(15));
console.log(lixeira1.conscientizar());
//# sourceMappingURL=interacaoLixeira.js.map