"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = require("./Banco");
const banco1 = new Banco_1.Banco('1m', 'Madeira', 15);
console.log(banco1.getTamanho());
console.log(banco1.getMaterial());
console.log(banco1.getPeso());
console.log(banco1.sentar());
console.log(banco1.descansar(50));
//# sourceMappingURL=interacaoBanco.js.map