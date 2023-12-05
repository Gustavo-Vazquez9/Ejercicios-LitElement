import { LitElement,css, html } from 'lit';
export class MyPage extends LitElement {
  static properties = {
  };
  constructor() {
    super();
  }

  get headerTemplate()
  {
    return html`<header>header</header>`;
  }
  get articleTemplate()
  {
    return html`<article>article</article>`;
  }
  get footerTemplate()
  {
    return html`<footer>footer</footer>`;
  }

  render() {
    return html`
    ${this.headerTemplate}
    ${this.articleTemplate}
    ${this.footerTemplate}
    `;
  }
}
customElements.define('my-page', MyPage);