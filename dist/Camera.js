"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
class Camera {
    constructor(_qualidade, _material, _marca) {
        this.qualidade = _qualidade;
        this.material = _material;
        this.marca = _marca;
    }
    getQualidade() {
        return this.qualidade;
    }
    setQualidade(_qualidade) {
        this.qualidade = _qualidade;
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
    gravar() {
        console.log(`Gravando...`);
    }
    fotografar() {
        console.log(`Fotografando...`);
    }
}
exports.Camera = Camera;
//# sourceMappingURL=Camera.js.map