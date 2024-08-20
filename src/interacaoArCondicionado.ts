import { ArCondicionado } from "./ArCondicionado";

const ArCondicionado1:ArCondicionado = new ArCondicionado (220, 'Cobre', 'Preto');
console.log(ArCondicionado1.getVoltagem());
console.log(ArCondicionado1.getMaterial());
console.log(ArCondicionado1.getMarca());
console.log(ArCondicionado1.esquentar(32));
console.log(ArCondicionado1.esfriar(16));