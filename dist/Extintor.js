"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extintor = void 0;
class Extintor {
    constructor(_tipo, _capacidade, _tamanho) {
        this.tipo = _tipo;
        this.capacidade = _capacidade;
        this.tamanho = _tamanho;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getCapacidade() {
        return this.capacidade;
    }
    setCapacidade(_capacidade) {
        this.capacidade = _capacidade;
    }
    proteger() {
        console.log(`Protegendo...`);
    }
    apagarFogo() {
        console.log(`Apagando fogo...`);
    }
}
exports.Extintor = Extintor;
//# sourceMappingURL=Extintor.js.map