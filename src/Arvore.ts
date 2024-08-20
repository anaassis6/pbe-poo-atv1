export class Arvore{
    private tamanho: number;
    private especie: string;
    private idade: number;

    public constructor(_tamanho: number, _especie: string, _idade: number){
        this.tamanho= _tamanho;
        this.especie= _especie;
        this.idade= _idade;
    }

    public getTamanho(): number{
        return this.tamanho;
    }
    public setTamanho(_tamanho:number):void{
        this.tamanho = _tamanho;
    }

    public getIdade(): number{
        return this.idade;
    }
    public setIdade(_idade:number):void{
        this.idade = _idade;
    }

    public getEspecie(): string{
        return this.especie;
    }
    public setEspecie(_especie:string):void{
        this.especie = _especie;
    }

    public fotossintese(): void{
        console.log(`Realizando fotossíntese!`);
    }
    public sombra():void{
        console.log(`Aproveite a sombra!`);
    }
}