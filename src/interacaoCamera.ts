import { Camera } from "./Camera";

const Camera1: Camera = new Camera ('5MP', 'Vidro', 'IntelBras');
console.log(Camera1.getQualidade());
console.log(Camera1.getMaterial());
console.log(Camera1.getMarca());
console.log(Camera1.gravar());
console.log(Camera1.fotografar());