import { LitElement,css, html } from 'lit';
import {map} from 'lit/directives/map.js';
export class LitelementTemplates extends LitElement {
  static get styles(){
    return css`
    :host {
      display:block;
      padding: 25px;
      color: var(--litelement-templates-text-color,#000);
    }
    `;
  }


  static get properties() {
    return {
      title: {type: String},
      counter: {type: Number},

      myString: {type: String},
      myArray: {type: Array},
      myBool: {type: Boolean}
    };
  };


  constructor() {
    super();
    this.title = "Hola, incrementa el valor!!";
    this.counter = 0;

    this.myString = "Hola mundo";
    this.myArray = ["un","arreglo","de","prueba"];
    this.myBool = true;
  }

  __increment() {
    this.counter += 1;
    this.myBool = !this.myBool;
  }

  render() {
    return html`
    <h2>${this.title} | ${this.counter}</h2>
    <button @click=${this.__increment}>Increment</button>
    
    <hr>

    <p>Arreglos, bucles y condicionales</p>
    <p>${this.myString}</p>
    <ul>
      ${this.myArray.map((item)=>html`<li>${item}</li>`)}
    </ul>
    ${this.myBool ?
    html`<p>Esto retorna porque myBool es verdadero</p>` :
    html`<p>Esto retorna porque myBool es falso</p>`}
    `;
  }
}
customElements.define('litelement-templates', LitelementTemplates);