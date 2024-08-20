export class Cobra{
    private tamanho: number;
    private especie: string;
    private cor: string;

    public constructor(_tamanho: number, _especie: string, _cor: string){
        this.tamanho= _tamanho;
        this.especie= _especie;
        this.cor= _cor;
    }

    public getTamanho(): number{
        return this.tamanho;
    }
    public setTamanho(_tamanho:number):void{
        this.tamanho = _tamanho;
    }

    public getCor(): string{
        return this.cor;
    }
    public setCor(_cor:string):void{
        this.cor = _cor;
    }

    public getEspecie(): string{
        return this.especie;
    }
    public setEspecie(_especie:string):void{
        this.especie = _especie;
    }

    public envenenar(): void{
        console.log(`Cuidado! A cobra pode te envenenar!`);
    }
    public engolir(alimento: string):string{
        return alimento;
    }
}