import { PlantaDeEtanol } from "./PlantaDeEtanol";

const PlantaDeEtanol1:PlantaDeEtanol = new PlantaDeEtanol (8, 'Cana-de-Açúcar', 'Chumbo');
console.log(PlantaDeEtanol1.getTamanho());
console.log(PlantaDeEtanol1.getMaterial());
console.log(PlantaDeEtanol1.getCor());
console.log(PlantaDeEtanol1.armazenar());
console.log(PlantaDeEtanol1.produzir());