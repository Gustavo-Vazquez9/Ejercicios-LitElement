import { LitElement, html, css } from 'lit';

export class MyConverter extends LitElement {
    static get styles(){
        return css`
        `;
      }
    
    
      static get properties() {
        return {
            myProp:
            {
                reflect:true,
                converter: 
                {
                    toAttribute(value)
                    {
                        console.log('myProp\'s toAttribute.');
                        console.log('Processing:', value,typeof(value));
                        let retVal = String(value);
                        console.log('Returning:',retVal,typeof(retVal));
                        return retVal;
                    },
                    fromAttribute(value)
                    {
                        console.log('myProp\'s fromAttribute.');
                        console.log('Processing:', value,typeof(value));
                        let retVal = Number(value);
                        console.log('Returning:',retVal,typeof(retVal));
                        return retVal;
                    }
                }
            },
            theProp:
            {
                reflect:true,
                converter(value) 
                {
                    console.log('theProp\'s converter.');
                    console.log('Processing:', value,typeof(value));
                    let retVal = Number(value);
                    console.log('Returning:',retVal,typeof(retVal));
                    return retVal;
                }
            }
        };
      };
    
    
      constructor() {
        super();
        this.myProp = "mi propiedad";
        this.theProp = "la propiedad";
      }

      attributeChangedCallback(name, oldValue, newValue)
      {
        super.attributeChangedCallback(name,oldValue,newValue);
      }

      changeAtributos()
      {
        let randomString = Math.floor(Math.random()*100).toString();
        this.setAttribute('myprop', 'myprop' + randomString);
        this.setAttribute('theprop', 'theprop' + randomString);
        this.requestUpdate();
      }

      changePropiedades()
      {
        let randomString = Math.floor(Math.random()*100).toString();
        this.myProp = 'myprop' + randomString;
        this.theProp = 'theprop' + randomString; 
      }
    
      render() {
        return html`
        <p>myProp: ${this.myProp} tipo: ${typeof(this.myProp)}</p>
        <p>myProp: ${this.theProp} tipo: ${typeof(this.theProp)}</p>
        <button @click="${this.changePropiedades}">cambiar propiedades</button>
        <button @click="${this.changeAtributos}">cambiar atributos</button>
        `;
      }
}
customElements.define('my-converter', MyConverter);
