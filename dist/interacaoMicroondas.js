"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Microondas_1 = require("./Microondas");
const Microondas1 = new Microondas_1.Microondas('Panasonic', 900, 34);
console.log(Microondas1.getMarca());
console.log(Microondas1.getPotencia());
console.log(Microondas1.getTamanho());
console.log(Microondas1.esquentar());
console.log(Microondas1.cozinhar(`brócolis`, 7));
//# sourceMappingURL=interacaoMicroondas.js.map