import { LitElement,css, html } from 'lit';
import '../src/e-contact'
export class EContactList extends LitElement {
  static get styles(){
    return css`
    `;
  }


  static get properties() {
    return {
      contacto: {type: Array}
    };
  };


  constructor() {
    super();
    this.contacto= [
        {
            nombre:"Gustavo",
            email:"vazgus9@gmail.com"
        },
        {
            nombre:"Molly",
            email:"molly9@gmail.com"
        },
        {
            nombre:"Jazmin",
            email:"morjaz9@gmail.com"
        },
        
    ];
  }

  render() {
    return html`
     <div>
        ${this.contacto.map( (item) => html`
        <e-contact email="${item.email}" nombre="${item.nombre}"></e-contact>
        <br>
        `)}
    </div>
    `;
  }
}
customElements.define('e-contact-list', EContactList);