import { LitElement,css, html } from 'lit';
export class LightDom extends LitElement {
  static properties = {
  };
  constructor() {
    super();
  }
  render() {
    return html`
    <p><b>Render root overridden.</b>Template renders without shadow DOM.</p>
    `;
  }
}
customElements.define('light-dom', LightDom);