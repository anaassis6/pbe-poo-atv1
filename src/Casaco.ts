export class Casaco{
    private tamanho: number;
    private marca: string;
    private cor: string;

    public constructor(_tamanho: number, _marca: string, _cor: string){
        this.tamanho= _tamanho;
        this.marca= _marca;
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

    public getMarca(): string{
        return this.marca;
    }
    public setMarca(_marca:string):void{
        this.marca = _marca;
    }

    public vestir(): void{
        console.log(`Você pode vesti-lo`);
    }
    public esquentar():void{
        console.log(`O casaco esquenta!`);
    }
}