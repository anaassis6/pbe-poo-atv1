"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor(_tamanho, _material, _peso) {
        this.tamanho = _tamanho;
        this.material = _material;
        this.peso = _peso;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    sentar() {
        console.log(`Você pode sentar-se no banco`);
    }
    descansar(tempo) {
        return tempo;
    }
}
exports.Banco = Banco;
//# sourceMappingURL=Banco.js.map