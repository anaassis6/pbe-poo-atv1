export class Notebook{
    private processador: string;
    private sistema: string;
    private armazenameto: number;

    public constructor(_processador: string, _sistema: string, _armazenamento: number){
        this.processador= _processador;
        this.sistema= _sistema;
        this.armazenameto= _armazenamento;
    }

    public getProcessador(): string{
        return this.processador;
    }
    public setProcessador(_processador:string):void{
        this.processador = _processador;
    }

    public getSistema(): string{
        return this.sistema;
    }
    public setSistema(_sistema:string):void{
        this.sistema = _sistema;
    }

    public getArmazenamento(): number{
        return this.armazenameto;
    }
    public setArmazenamento(_armazenamento:number):void{
        this.armazenameto = _armazenamento;
    }

    public jogar(jogo: string): string{
        return `Com o processador ${this.processador}, é possível jogar ${jogo}`
    }
    public assistir(conteudo: string):string{
        return `Com o ${this.sistema}, é possível assistir ${conteudo}`
    }
}