class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <h2>
          <slot name="title"></slot>
        </h2>
        <p>
          <slot name="paragraph"></slot>
        </p>
        <img src="" alt="">
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
      :host {
        display: inline-grid;
      }
      :host([checked][green]) {
        display: inline-flex;
        background: green;
      }
      :host-context(article.blue) {
        width:100%;
      }
      :host h2 {
        color: red;
      }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);
