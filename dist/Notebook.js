"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notebook = void 0;
class Notebook {
    constructor(_processador, _sistema, _armazenamento) {
        this.processador = _processador;
        this.sistema = _sistema;
        this.armazenameto = _armazenamento;
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
        return this.armazenameto;
    }
    setArmazenamento(_armazenamento) {
        this.armazenameto = _armazenamento;
    }
    jogar(jogo) {
        return `Com o processador ${this.processador}, é possível jogar ${jogo}`;
    }
    assistir(conteudo) {
        return `Com o ${this.sistema}, é possível assistir ${conteudo}`;
    }
}
exports.Notebook = Notebook;
//# sourceMappingURL=Notebook.js.map