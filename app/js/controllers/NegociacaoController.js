class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._listaNegociacoes = new ListaNegociacoes('#negociacoes-view');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._listaNegociacoes.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
        this._negociacoes.adiciona(negociacao);
        this._listaNegociacoes.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}
