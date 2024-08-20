"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobra = void 0;
class Cobra {
    constructor(_tamanho, _especie, _cor) {
        this.tamanho = _tamanho;
        this.especie = _especie;
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
    getEspecie() {
        return this.especie;
    }
    setEspecie(_especie) {
        this.especie = _especie;
    }
    envenenar() {
        console.log(`Cuidado! A cobra pode te envenenar!`);
    }
    engolir(alimento) {
        return alimento;
    }
}
exports.Cobra = Cobra;
//# sourceMappingURL=Cobra.js.map