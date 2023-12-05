import { LitElement,css, html } from 'lit';
import {map} from 'lit/directives/map.js';
export class SimpleComponent extends LitElement {
  static properties = {
    cosas: {state: true},
  };
_deleteThing(index) {
    this.cosas = this.cosas.filter((_, i) => i !== index);
  }
  constructor() {
    super();
    this.cosas = ['Entregar ejercicios lit',
      'Sacar a molly a pasear','Estudiar',
      'Ver pelicula', ];
  }
  render() {
    return html`
      <p>Mi todo list</p>
      <ul>
        ${map(this.cosas,(item, index) => html`
            <li>
              ${item}
               <button @click=${() => this._deleteThing(index)}>Eliminar</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}
customElements.define('simple-component', SimpleComponent);