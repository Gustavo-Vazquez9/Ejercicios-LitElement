import { LitElement, html, css } from 'lit';

export class PropiedadAtributo extends LitElement {
    static get styles(){
        return css`
        `;
      }
    
    
      static get properties() {
        return {
            prop1: { type: String , reflect: true},
            prop2: { type: Number, reflect: true},
            prop3: { type: Boolean, reflect: true},
            prop4: { type: Array, reflect: true},
            prop5: { type: Object, reflect: true}
        };
      };
    
    
      constructor() {
        super();
        this.prop1 = "";
        this.prop2 = 0;
        this.prop3 = false;
        this.prop4 = [];
        this.prop5 = {};
      }

      changeAtributos()
      {
        let random = Math.floor(Math.random()*10);
        let miBool = this.getAttribute('prop3');
        
        this.setAttribute('prop1', random.toString());
        this.setAttribute('prop2', random.toString());
        this.setAttribute('prop3', miBool?'':null);
        this.setAttribute('prop4', JSON.stringify([...this.prop4, random]));
        this.setAttribute('prop5', JSON.stringify(Object.assign({},this.prop5,{[random]:random})));
        this.requestUpdate();
      }

      changePropiedades()
      {
        let random = Math.floor(Math.random()*10);
        let miBool = this.prop3;

        this.prop1 = random.toString();
        this.prop2 = random;
        this.prop3 = !miBool;
        this.prop4 = [...this.prop4,random];
        this.prop5 = Object.assign({},this.prop5,{[random]:random});
      }

      attributeChangedCallback(name, oldValue, newValue)
      {
        console.log('atributo cambiado',name, newValue);
        super.attributeChangedCallback(name,oldValue,newValue);
      }
      updated(changeProp)
      {
        changeProp.forEach( (valorViejo,propNombre) => {
            console.log(`${propNombre} cambio al anterior valor ${valorViejo}`);
        });
      }
    
      render() {
        return html`
        <p>prop 1 : |${this.prop1}|</p>
        <p>prop 2 : |${this.prop2}|</p>
        <p>prop 3 : |${this.prop3}|</p>

        <p>prop 4 : |${this.prop4.map( (item,index) =>
                html`<span>[${index}]:${item}</span>`
            )}|
        </p>
        <p>prop 5 : |${Object.keys(this.prop5).map( (item,index) => 
                html`<span>${item}: ${this.prop5[item]}</span>`
            )}|
        </p>
        <button @click="${this.changePropiedades}">cambiar propiedades</button>
        <button @click="${this.changeAtributos}">cambiar atributos</button>


        `;
      }
}
customElements.define('propiedad-atributo', PropiedadAtributo);
