"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
class Computador {
    constructor(_processador, _sistema, _armazenamento) {
        this.processador = _processador;
        this.sistema = _sistema;
        this.armazenamento = _armazenamento;
    }
    getProcessador() {
        return this.processador;
    }
    setProcessador(_processador) {
        this.processador = _processador;
    }
    getSistema() {
        return this.sistema;
    }
    setSistema(_sistema) {
        this.sistema = _sistema;
    }
    getArmazenamento() {
        return this.armazenamento;
    }
    setArmazenamento(_armazenamento) {
        this.armazenamento = _armazenamento;
    }
    estudar(disciplina) {
        return `O computador está sendo utilizado para estudar ${disciplina}`;
    }
    pesquisar() {
        console.log(`Pesquisando...`);
    }
}
exports.Computador = Computador;
//# sourceMappingURL=Computador.js.map