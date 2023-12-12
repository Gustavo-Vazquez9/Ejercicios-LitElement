import { LitElement, html, css } from 'lit';

export class WishlistInputText extends LitElement {
    
    static get styles(){
        return css `
        .input-text{
        width: 100%;
        height: 50px;
        font-size: 20px;
        border-radius: 20px;
        border:1px solid #c2c2c2;
        padding-left:5px;
        }
        div{
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
        }
        `;
    }
    static get properties(){
        return {
            value: { type: String}
        };
    }

    render(){
        return html`
        <div>
        <input class="input-text" type="text" .value="${this.value}"
                        @input="${this.inputKeyDown}">
        </div>


        
        `;
    }
    inputKeyDown(e){
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('keydown',{
            detail: this.target
        }));
    }

}
customElements.define('wishlist-input-text', WishlistInputText);