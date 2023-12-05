import { LitElement,css, html } from 'lit';
import '../src/e-contact'
export class TemplateBind extends LitElement {
  static get styles(){
    return css`
    `;
  }


  static get properties() {
    return {
      prop1: {type: String},
      prop2: {type: String},
      prop3: {type: Boolean},
      prop4: {type: String},
      activo: {type: Boolean}
    };
  };


  constructor() {
    super();
    this.prop1 = "Texto vinculado";
    this.prop2 = "mi div";
    this.prop3 = true;
    this.prop4 = "pie";
    this.activo = true;
  }

  clickHandler(e)
  {
    console.log(e.target);
  }

  doChange(e)
  {
    this.activo = e.target.checked;
    console.log(`Ahora estoy en estado activo = ${this.activo}`);
  }

  render() {
    return html`
    <div>${this.prop1}</div>
    <div id="${this.prop2}">atributo vinculado</div>
    <div>
        booleano vinculado
        <input type="text" ?disabled="${this.prop3}"/>
    </div>
    <div>
        propiedad vinculada
        <input type="text" .value="${this.prop4}"/>
    </div>
    <div>
        controlador de evento vinculada
        <button @click="${this.clickHandler}">click</button>
    </div>
    <div>
    <p><input type="checkbox" ?checked="${this.activo}" @change="${this.doChange}">Activar/Desactivar</p>
    </div>
    `;
  }
}
customElements.define('template-bind', TemplateBind);