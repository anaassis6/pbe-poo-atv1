"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArCondicionado_1 = require("./ArCondicionado");
const ArCondicionado1 = new ArCondicionado_1.ArCondicionado(220, 'Cobre', 'Preto');
console.log(ArCondicionado1.getVoltagem());
console.log(ArCondicionado1.getMaterial());
console.log(ArCondicionado1.getMarca());
console.log(ArCondicionado1.esquentar(32));
console.log(ArCondicionado1.esfriar(16));
//# sourceMappingURL=interacaoArCondicionado.js.map