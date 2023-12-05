import { LitElement,css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
export class DynamicStyle extends LitElement {
  static get styles(){
    return css`
    .miDiv{
        background-color: black
    }
    .otraClase{
        border: 3px solid tomato
    }
    `;
  }


  static get properties() {
    return {
        clases: {type: Object},
        estilos: {type: Object}
    };
  };


  constructor() {
    super();
    this.clases = { miDiv: true, otraClase: true};
    this.estilos = {color: 'white', fontFamily: 'Roboto'}
  }

  render() {
    return html`
    <div class="${classMap(this.clases)}" style="${styleMap(this.estilos)}">
    El color blanco viene del stylemap el fondo viene de la clase miDiv
    </div>
    `;
  }
}
customElements.define('dynamic-style', DynamicStyle);