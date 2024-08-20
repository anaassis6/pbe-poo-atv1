"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casaco = void 0;
class Casaco {
    constructor(_tamanho, _marca, _cor) {
        this.tamanho = _tamanho;
        this.marca = _marca;
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
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    vestir() {
        console.log(`Você pode vesti-lo`);
    }
    esquentar() {
        console.log(`O casaco esquenta!`);
    }
}
exports.Casaco = Casaco;
//# sourceMappingURL=Casaco.js.map