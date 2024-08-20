export class Biblioteca{
    private tamanho: number;
    private livros: number;
    private pessoas: number;

    public constructor(_tamanho: number, _livros: number, _pessoas: number){
        this.tamanho= _tamanho;
        this.livros= _livros;
        this.pessoas= _pessoas;
    }

    public getTamanho(): number{
        return this.tamanho;
    }
    public setTamanho(_tamanho:number):void{
        this.tamanho = _tamanho;
    }

    public getPessoas(): number{
        return this.pessoas;
    }
    public setPessoas(_pessoas:number):void{
        this.pessoas = _pessoas;
    }

    public getLivros(): number{
        return this.livros;
    }
    public setLivros(_livros:number):void{
        this.livros = _livros;
    }

    public estudar(disciplina: string): void{
        console.log(`É possível estudar "${disciplina}" na biblioteca`);
    }
    public jogar(jogo: string): void{
        console.log(`Temos jogos como "${jogo}"`);
    }
}