System.register(["../models/Negociacoes", "../views/ListaNegociacoes", "../views/MensagemView", "../models/Negociacao", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var Negociacoes_1, ListaNegociacoes_1, MensagemView_1, Negociacao_1, index_1, index_2, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (ListaNegociacoes_1_1) {
                ListaNegociacoes_1 = ListaNegociacoes_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
                index_2 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._listaNegociacoes = new ListaNegociacoes_1.ListaNegociacoes('#negociacoes-view');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._listaNegociacoes.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado) {
                        this._mensagemView.update("Você não pode criar negociações de sábado e domingo!");
                        this._mensagemView.ocultarTemplate(3000);
                    }
                    else {
                        const negociacao = new Negociacao_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                        this._negociacoes.adiciona(negociacao);
                        this._listaNegociacoes.update(this._negociacoes);
                        this._mensagemView.update('Negociação adicionada com sucesso!');
                        this._mensagemView.ocultarTemplate(3000);
                    }
                }
            };
            __decorate([
                index_2.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_2.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_2.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_1.logarTempoDeExecucao(true)
            ], NegociacaoController.prototype, "adiciona", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
