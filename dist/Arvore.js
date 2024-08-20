"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arvore = void 0;
class Arvore {
    constructor(_tamanho, _especie, _idade) {
        this.tamanho = _tamanho;
        this.especie = _especie;
        this.idade = _idade;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(_idade) {
        this.idade = _idade;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(_especie) {
        this.especie = _especie;
    }
    fotossintese() {
        console.log(`Realizando fotossíntese!`);
    }
    sombra() {
        console.log(`Aproveite a sombra!`);
    }
}
exports.Arvore = Arvore;
//# sourceMappingURL=Arvore.js.map