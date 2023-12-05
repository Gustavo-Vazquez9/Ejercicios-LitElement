import { LitElement,css, html } from 'lit';
export class HostElement extends LitElement {
  static get styles(){
    return css`
    :host{
        display: block;
        background-color: azure;
    }
    :host([hidden])
    {
        display: none;
    }
    :host(.blue)
    {
        background-color: aliceblue;
        color: blue;
    }
    p{
        font-family: fantasy;
    }
    `;
  }


  static get properties() {
    return {
    };
  };


  constructor() {
    super();
  }

  render() {
    return html`
    <p>Hola estamos probando estilos con la pseudoclase host</p>
    `;
  }
}
customElements.define('host-element', HostElement);