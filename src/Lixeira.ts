export class Lixeira{
    private tamanho: number;
    private material: string;
    private cor: string;

    public constructor(_tamanho: number, _material: string, _cor: string){
        this.tamanho= _tamanho;
        this.material= _material;
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

    public getMaterial(): string{
        return this.material;
    }
    public setMaterial(_material:string):void{
        this.material = _material;
    }

    public armazenar(capacidade: number): number{
        return capacidade;
    }
    public conscientizar():void{
        console.log(`Jogue o lixo na lixeira, ajude a preservar o meio ambiente!`);
    }
}