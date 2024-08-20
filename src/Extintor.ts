export class Extintor{
    private tipo: string;
    private capacidade: number;
    private tamanho: number;

    public constructor(_tipo: string, _capacidade: number, _tamanho:number){
        this.tipo= _tipo;
        this.capacidade= _capacidade;
        this.tamanho= _tamanho;
    }

    public getTipo(): string{
        return this.tipo;
    }
    public setTipo(_tipo:string): void{
        this.tipo= _tipo;
    }

    public getTamanho(): number{
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void{
        this.tamanho= _tamanho;
    }

    public getCapacidade(): number{
        return this.capacidade;
    }
    public setCapacidade(_capacidade: number): void{
        this.capacidade=_capacidade;
    }

    public proteger(): void{
        console.log(`Protegendo...`);
    }
    public apagarFogo(): void{
        console.log(`Apagando fogo...`);
    }
}