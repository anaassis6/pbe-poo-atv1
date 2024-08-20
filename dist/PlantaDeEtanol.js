"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantaDeEtanol = void 0;
class PlantaDeEtanol {
    constructor(_tamanho, _material, _cor) {
        this.tamanho = _tamanho;
        this.material = _material;
        this.cor = _cor;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    armazenar() {
        console.log(`O armazenamento está sendo usado!`);
    }
    produzir() {
        console.log(`A planta está produzindo!`);
    }
}
exports.PlantaDeEtanol = PlantaDeEtanol;
//# sourceMappingURL=PlantaDeEtanol.js.map