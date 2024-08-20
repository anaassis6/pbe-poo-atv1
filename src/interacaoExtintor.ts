import { Extintor} from "./Extintor";

const Extintor1: Extintor = new Extintor ('Classe C', 1 , 9);
console.log(Extintor1.getTipo());
console.log(Extintor1.getCapacidade());
console.log(Extintor1.getTamanho());
console.log(Extintor1.proteger());
console.log(Extintor1.apagarFogo());