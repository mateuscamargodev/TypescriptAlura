import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View<T> {
    private _elemento: Element;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false){
        this._elemento = <Element>document.querySelector(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao()
    update(model: T): void {
        let template = this.template(model);
        if(this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this._elemento.innerHTML =  this.template(model);
    }
    /**
     * Oculta o template depois de um determinado tempo (parâmetro delay).
     * @param delay tempo em milisegundos.
     */
    ocultarTemplate(delay: number): void {        
        let elemento = this._elemento;
        setTimeout(function(){elemento.innerHTML=""}, delay);
    }

    abstract template(model: T): string;
}