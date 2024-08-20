"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lixeira = void 0;
class Lixeira {
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
    armazenar(capacidade) {
        return capacidade;
    }
    conscientizar() {
        console.log(`Jogue o lixo na lixeira, ajude a preservar o meio ambiente!`);
    }
}
exports.Lixeira = Lixeira;
//# sourceMappingURL=Lixeira.js.map