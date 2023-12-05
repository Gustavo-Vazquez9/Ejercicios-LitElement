import { LitElement, html, css } from 'lit';

export class CustomHasChanged extends LitElement {
    static get styles()
    {
        return css`
        `;
    }
    static get properties() {
        return {
            myProp: {
                type: Number,
                hasChanged(newValue,oldValue)
                {
                    if(newValue > oldValue)
                    {
                        console.log(`${newValue} > ${oldValue}. hasChanged true.`);
                        return true;
                    }else{
                        console.log(`${newValue} <= ${oldValue}. hasChanged false.`);
                        return false;
                    }
                }
            },
            estilos: {type: Object}
        };
      };
    constructor()
    {
        super();
        this.myProp = 1;
    }
    render() {
        return html`
        <p>myProp: ${this.myProp}</p>
        <button @click="${this.getNewVal}">get new value</button>
        `;
    }
    updated()
    {
        console.log("updated");
    }
    getNewVal()
    {
        let newval = Math.floor(Math.random()*10);
        this.myProp = newval;
    }
}
customElements.define('custom-has-changed', CustomHasChanged);
