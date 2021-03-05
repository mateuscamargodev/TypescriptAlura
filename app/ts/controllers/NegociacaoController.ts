import { Negociacoes } from "../models/Negociacoes";
import { ListaNegociacoes } from "../views/ListaNegociacoes";
import { MensagemView } from "../views/MensagemView";
import { Negociacao } from "../models/Negociacao";
import { logarTempoDeExecucao } from "../helpers/decorators/index";
import { domInject } from "../helpers/decorators/index";

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
    
    private _negociacoes: Negociacoes = new Negociacoes();
    private _listaNegociacoes: ListaNegociacoes = new ListaNegociacoes('#negociacoes-view');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._listaNegociacoes.update(this._negociacoes);
    }

    @logarTempoDeExecucao(true)
    adiciona(event: Event) {
        event.preventDefault();
        
        const data = new Date(this._inputData.val().replace(/-/g, ','));

        if(data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado){
            this._mensagemView.update("Você não pode criar negociações de sábado e domingo!");
            this._mensagemView.ocultarTemplate(3000);
        }
        else {
            const negociacao = new Negociacao(
                data,
                parseInt(this._inputQuantidade.val()),
                parseFloat(this._inputValor.val())
            );
    
            this._negociacoes.adiciona(negociacao);
    
            this._listaNegociacoes.update(this._negociacoes);
    
            this._mensagemView.update('Negociação adicionada com sucesso!');
            this._mensagemView.ocultarTemplate(3000);
        }
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}