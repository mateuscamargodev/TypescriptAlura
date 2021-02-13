class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
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
