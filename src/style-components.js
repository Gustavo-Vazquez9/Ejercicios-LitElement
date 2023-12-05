import { css,html } from 'lit';
import { SuperElemento } from './super-elemento';

export class StyleComponents extends SuperElemento {
    static get styles()
    {
        return [
            super.styles,css`button{ color:red; }`
        ];
    }
    render() {
        return html`
        <button>Click</button>
        `;
      }
}

customElements.define('style-components', StyleComponents);