export class Negociacao {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}

    getVolume() {
        return this.quantidade * this.valor;
    }
}