import { LitElement,css, html } from 'lit';
import {map} from 'lit/directives/map.js';
export class EContact extends LitElement {
  static get styles(){
    return css`
    div{
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 5px;
        display: inline-block;
    }
    h1{
        font-size: 1.2em;
        font-weight: normal;
    }
    `;
  }


  static get properties() {
    return {
      nombre: {type: String},
      email:{type: String},
      saludar:{type: Boolean}
    };
  };


  constructor() {
    super();
    this.saludar = false;
  }

  toggle(e){
    e.preventDefault();
    this.saludar = !this.saludar;
  }

  render() {
    return html`
    <div>
        <p><a href="#" @click="${this.toggle}">Hei saludame</a></p>
    </div>
    ${this.saludar ?
    html`Hola mi nombre es ${this.nombre}, mandame un correo a ${this.email} :)` :
    html`No me quieres saludar :(`
    }
    `;
  }
}
customElements.define('e-contact', EContact);