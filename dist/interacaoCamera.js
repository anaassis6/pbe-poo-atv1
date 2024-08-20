"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Camera_1 = require("./Camera");
const Camera1 = new Camera_1.Camera('5MP', 'Vidro', 'IntelBras');
console.log(Camera1.getQualidade());
console.log(Camera1.getMaterial());
console.log(Camera1.getMarca());
console.log(Camera1.gravar());
console.log(Camera1.fotografar());
//# sourceMappingURL=interacaoCamera.js.map