export class Banco{
    private tamanho: string;
    private material: string;
    private peso: number;

    public constructor(_tamanho: string, _material: string, _peso: number){
        this.tamanho= _tamanho;
        this.material= _material;
        this.peso= _peso;
    }

    public getTamanho(): string{
        return this.tamanho;
    }
    public setTamanho(_tamanho:string):void{
        this.tamanho = _tamanho;
    }

    public getMaterial(): string{
        return this.material;
    }
    public setMaterial(_material:string):void{
        this.material = _material;
    }

    public getPeso(): number{
        return this.peso;
    }
    public setPeso(_peso:number):void{
        this.peso = _peso;
    }

    public sentar(): void{
        console.log(`Você pode sentar-se no banco`);
    }
    public descansar(tempo: number):number{
        return tempo;
    }
}