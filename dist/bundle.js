(()=>{"use strict";class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <p>a card</p>\n        ")}}customElements.define("app-card",a);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <h1>title</h1>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        <app-card></app-card>\n        ")}}customElements.define("app-container",p)})();