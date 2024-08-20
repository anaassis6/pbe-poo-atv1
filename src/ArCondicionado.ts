export class ArCondicionado{
    private voltagem: number;
    private material: string;
    private marca: string;

    public constructor(_voltagem: number, _material:string, _marca:string){
        this.voltagem= _voltagem;
        this.material= _material;
        this.marca= _marca;
    }

    public getVoltagem(): number{
        return this.voltagem;
    }
    public setVoltagem(_voltagem:number): void{
        this.voltagem= _voltagem;
    }

    public getMaterial(): string{
        return this.material;
    }
    public setMaterial(_material: string): void{
        this.material= _material;
    }

    public getMarca(): string{
        return this.marca;
    }
    public setMarca(_marca: string): void{
        this.marca=_marca;
    }

    public esquentar(graus: number): void{
        console.log(`Sua maior temperatura é ${graus}`);
    }
    public esfriar(graus: number): void{
        console.log(`Sua menor temperatura é ${graus}`);
    }
}
