export class Bicicleta{
    private aro: number;
    private quadro: number;
    private peso: number;

    public constructor(_aro: number, _quadro: number, _peso: number){
        this.aro= _aro;
        this.quadro= _quadro;
        this.peso= _peso;
    }

    public getAro(): number{
        return this.aro;
    }
    public setAro(_aro:number):void{
        this.aro = _aro;
    }

    public getQuadro(): number{
        return this.quadro;
    }
    public setQuadro(_quadro:number):void{
        this.quadro = _quadro;
    }

    public getPeso(): number{
        return this.peso;
    }
    public setPeso(_peso:number):void{
        this.peso = _peso;
    }

    public pedalar(distancia: number): void{
        console.log(`Com está bicicleta pedalaram ${distancia}km!`)
    }
    public manobras():void{
        console.log(`Com está bicicleta é possível realizar manobras!`)
    }
}