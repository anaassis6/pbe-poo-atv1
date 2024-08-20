"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sapo = void 0;
class Sapo {
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
    pular() {
        console.log(`O sapo pula`);
    }
    comerInsetor() {
        console.log(`O sapo come insetos`);
    }
}
exports.Sapo = Sapo;
//# sourceMappingURL=Sapo.js.map