import { LitElement,css, html } from 'lit';
export class MyElement extends LitElement {
  static properties = {
  };
  constructor() {
    super();
  }
  render() {
    return html`
    <div>
        <p>Hola soy una <slot name="link"></slot></p>
        <slot name="texto"></slot>
    </div>
    `;
  }
}
customElements.define('my-element', MyElement);