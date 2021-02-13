class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _listaNegociacoes: ListaNegociacoes = new ListaNegociacoes('#negociacoes-view');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._listaNegociacoes.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);

        this._negociacoes.adiciona(negociacao);

        this._listaNegociacoes.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}