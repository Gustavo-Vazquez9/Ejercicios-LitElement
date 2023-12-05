import { LitElement,css, html } from 'lit';
import { buttonStyles } from './style.module';
export class SharingStyles extends LitElement {
  static get styles()
  {
    return [
        buttonStyles,css`
        :host{
            display: block;
            border:1px solid black;
        }
        `
    ];
  }
  constructor() {
    super();
  }
  render() {
    return html`
    <button class="blue-button">Click</button>
    <button class="blue-button" disabled>No click</button>
    `;
  }
}
customElements.define('sharing-styles', SharingStyles);