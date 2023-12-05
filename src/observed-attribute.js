import { LitElement, html, css } from 'lit';

export class ObservedAttribute extends LitElement {
    static get styles(){
        return css`
        `;
      }
    
    
      static get properties() {
        return {
            myProp: { attribute: true},
            theProp: {attribute: false},
            otherProp: { attribute: 'other-prop'},
        };
      };
    
    
      constructor() {
        super();
        this.myProp = "myProp";
        this.theProp = "theProp";
        this.otherProp = "otherProp";
      }

      changeAtributos()
      {
        let randomString = Math.floor(Math.random()*100).toString();
        
        this.setAttribute('myprop', 'myprop' + randomString);
        this.setAttribute('theprop', 'theprop' + randomString);
        this.setAttribute('other-prop', 'other-prop' + randomString);
        this.requestUpdate();
      }

      attributeChangedCallback(name, oldValue, newValue)
      {
        console.log('atributo cambiado',name, newValue);
        super.attributeChangedCallback(name,oldValue,newValue);
      }
      updated(changeProp)
      {
        changeProp.forEach( (valorViejo,propNombre) => {
            console.log(`${propNombre} cambio al anterior valor ${valorViejo}`);
        });
      }
    
      render() {
        return html`
        <p>myProp : ${this.myProp}</p>
        <p>theProp : ${this.theProp}</p>
        <p>otherProp : ${this.otherProp}</p>
        <button @click="${this.changeAtributos}">cambiar atributos</button>
        `;
      }
}
customElements.define('observed-attribute', ObservedAttribute);
