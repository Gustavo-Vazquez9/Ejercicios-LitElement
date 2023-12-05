import { LitElement, html, css } from 'lit';

export class LitelementLifcycle extends LitElement {
    
    static get properties(){
        return{
            title: {type: String},
            icon: {type: String}
        }
    }
    constructor()
    {
        super();
        this.title = "Sin titulo";
        this.icon = undefined;
    }
    render() {
        console.log('render');
        return html`
        <h1>Titulo: ${this.title}</h1>
        <h3>Icono: ${this.icon}</h3>
        `;
    }

    _enqueueUpdate()
    {
        console.log('_enqueueUpdate called');
        const result = super._enqueueUpdate();
        console.log('_enqueueUpdate returns' + result);
        return result;
    }
}
customElements.define('litelement-lifcycle', LitelementLifcycle);
