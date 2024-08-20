"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microondas = void 0;
class Microondas {
    constructor(_marca, _potencia, _tamanho) {
        this.marca = _marca;
        this.potencia = _potencia;
        this.tamanho = _tamanho;
    }
    getPotencia() {
        return this.potencia;
    }
    setPotencia(_potencia) {
        this.potencia = _potencia;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    esquentar() {
        console.log(`Esquentando...`);
    }
    cozinhar(alimento, tempo) {
        console.log(`Cozinhando ${alimento} por ${tempo} minutos}`);
    }
}
exports.Microondas = Microondas;
//# sourceMappingURL=Microondas.js.map