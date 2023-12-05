import { LitElement,css, html } from 'lit';
import '../src/text-input'
export class InputSample extends LitElement {
  static styles = css`
  :host{
    display:blook;
    padding:25px;
    color: var(--input-sample-text-color, #000);
  }
    `;
  static properties = {
    miDato: {type: String},
  };
  constructor() {
    super();
  }
  inputCambiado(e)
  {
    this.miDato = e.detail;
  }
  restTexto()
  {
    this.miDato = "";
  }
  render() {
    return html`
    <p>Soy mi elemento</p>
    <text-input value="${this.miDato}" valor="${this.miDato}" @cambio="${this.inputCambiado}" ></text-input>
    <p>El dato escrito es ${this.miDato}</p>
    <button @click="${this.restTexto}">Borar texto</button>
    `;
  }
}
customElements.define('input-sample', InputSample);