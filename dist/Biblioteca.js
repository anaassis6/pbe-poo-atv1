"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor(_tamanho, _livros, _pessoas) {
        this.tamanho = _tamanho;
        this.livros = _livros;
        this.pessoas = _pessoas;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getPessoas() {
        return this.pessoas;
    }
    setPessoas(_pessoas) {
        this.pessoas = _pessoas;
    }
    getLivros() {
        return this.livros;
    }
    setLivros(_livros) {
        this.livros = _livros;
    }
    estudar(disciplina) {
        console.log(`É possível estudar "${disciplina}" na biblioteca`);
    }
    jogar(jogo) {
        console.log(`Temos jogos como "${jogo}"`);
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map