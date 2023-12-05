import { LitElement,css, html } from 'lit';
import '../src/list-element';
export class TextInput extends LitElement {
  static styles = css`
    `;
  static properties = {
    valor: {type: String},
  };
  constructor() {
    super();
  }
  inputChange(e)
  {
    this.valor = e.target.value;
    this.dispatchEvent(new CustomEvent('cambio',{detail:this.valor}));
  }
  render() {
    return html`
    <p>
        <input type="text" .value="${this.valor}" @input="${this.inputChange}">
    </p>
    `;
  }
}
customElements.define('text-input', TextInput);