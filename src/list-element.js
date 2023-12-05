import { LitElement,css, html } from 'lit';
export class ListElement extends LitElement {
  static properties = {
    items: {type: Array},
  };
  constructor() {
    super();
  }
  render() {
    return html`
    <ul>
        ${this.items.map( (item)=> html`
        <li>${item}</li>
        `)}
    </ul>
    `;
  }
}
customElements.define('list-element', ListElement);