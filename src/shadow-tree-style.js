import { LitElement,css, html } from 'lit';
export class ShadowTreeStyle extends LitElement {
  static get styles(){
    return css`
    *{
        color: red;
    }
    p{
        font-family: sans-serif;
    }
    .myclass{
        margin: 120px;
    }
    #main{
        margin: 50px;
    }
    h1{
        font-size: 4.5rem;
    }
    `;
  }


  static get properties() {
    return {
      contacto: {type: Array}
    };
  };


  constructor() {
    super();
  }

  render() {
    return html`
    <p>Hola desde show tree style bla bla bla.....</p>
    <p class="myclass">Parrafo 1</p>
    <p id="main">Parrafo 2</p>
    <h1>T i t u l o</h1>
    `;
  }
}
customElements.define('shadow-tree-style', ShadowTreeStyle);