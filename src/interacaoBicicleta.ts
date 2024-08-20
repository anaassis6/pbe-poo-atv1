import { Bicicleta } from "./Bicicleta";

const bike1: Bicicleta = new Bicicleta (29, 17, 15)
console.log(bike1.getAro());
console.log(bike1.getQuadro());
console.log(bike1.getPeso());
console.log(bike1.pedalar(45));
console.log(bike1.manobras());