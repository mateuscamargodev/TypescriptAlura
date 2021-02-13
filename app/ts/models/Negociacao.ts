class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number){}

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }

    
    getVolume() {
        return this._quantidade * this._valor;
    }
    
}