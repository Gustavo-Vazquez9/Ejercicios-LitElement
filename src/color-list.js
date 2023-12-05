import { LitElement,css, html } from 'lit';
import '../src/list-element';
export class ColorList extends LitElement {
  static properties = {
    colores: {type: Array},
  };
  constructor() {
    super();
    this.colores = ["Verde","Blanco","Azul","Rojo","Amarillo"];
  }
  render() {
    return html`
    <list-element .items="${this.colores}"></list-element>
    `;
  }
}
customElements.define('color-list', ColorList);