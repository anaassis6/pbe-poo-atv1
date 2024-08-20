"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArCondicionado = void 0;
class ArCondicionado {
    constructor(_voltagem, _material, _marca) {
        this.voltagem = _voltagem;
        this.material = _material;
        this.marca = _marca;
    }
    getVoltagem() {
        return this.voltagem;
    }
    setVoltagem(_voltagem) {
        this.voltagem = _voltagem;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    esquentar(graus) {
        console.log(`Sua maior temperatura é ${graus}`);
    }
    esfriar(graus) {
        console.log(`Sua menor temperatura é ${graus}`);
    }
}
exports.ArCondicionado = ArCondicionado;
//# sourceMappingURL=ArCondicionado.js.map