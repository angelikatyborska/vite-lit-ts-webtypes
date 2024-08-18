import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * @element foo-greeting
 * Umm
 *
 * @attr {string} name - The name of the person you'd like say hello to
 * */
@customElement('foo-greeting')
export class FooGreeting extends LitElement {
  static styles = css`
    p { color: blue }
  `;

  @property()
  name = 'Somebody';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'foo-greeting': FooGreeting
  }
}
