"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
class Bicicleta {
    constructor(_aro, _quadro, _peso) {
        this.aro = _aro;
        this.quadro = _quadro;
        this.peso = _peso;
    }
    getAro() {
        return this.aro;
    }
    setAro(_aro) {
        this.aro = _aro;
    }
    getQuadro() {
        return this.quadro;
    }
    setQuadro(_quadro) {
        this.quadro = _quadro;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    pedalar(distancia) {
        console.log(`Com está bicicleta pedalaram ${distancia}km!`);
    }
    manobras() {
        console.log(`Com está bicicleta é possível realizar manobras!`);
    }
}
exports.Bicicleta = Bicicleta;
//# sourceMappingURL=Bicicleta.js.map