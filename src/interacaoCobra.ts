import { Cobra} from "./Cobra";

const cobra1: Cobra = new Cobra (3, 'Naja', 'Marrom');
console.log(cobra1.getTamanho());
console.log(cobra1.getEspecie());
console.log(cobra1.getCor());
console.log(cobra1.envenenar());
console.log(cobra1.engolir("A cobra engoliu um coelho"));