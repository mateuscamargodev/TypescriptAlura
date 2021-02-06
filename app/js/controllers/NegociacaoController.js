class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach(function (negociacao) {
            console.log(negociacao.getData());
            console.log(negociacao.getQuantidade());
            console.log(negociacao.getValor());
        });
    }
}
