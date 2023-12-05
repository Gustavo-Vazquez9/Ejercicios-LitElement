import { LitElement,css } from 'lit';
export class SuperElemento extends LitElement {
    static get styles()
    {
        return css`
        button{
            width:300px;
            font-style: italic;
        }`
    }
}