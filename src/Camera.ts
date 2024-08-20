export class Camera{
    private qualidade: string;
    private material: string;
    private marca: string;

    public constructor(_qualidade: string, _material:string, _marca:string){
        this.qualidade= _qualidade;
        this.material= _material;
        this.marca= _marca;
    }

    public getQualidade(): string{
        return this.qualidade;
    }
    public setQualidade(_qualidade:string): void{
        this.qualidade= _qualidade;
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

    public gravar(): void{
        console.log(`Gravando...`);
    }
    public fotografar(): void{
        console.log(`Fotografando...`);
    }
}