class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <p>${this.paragraph}</p>
        <img src=${this.img} alt="">
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
    h2 {
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

  static get observedAttributes() {
    return ["title", "paragraph", "img"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // if (name === "title") {
    //   this.title = newValue;
    // }
    // if (name === "paragraph") {
    //   this.paragraph = newValue;
    // }
    // if (name === "img") {
    //   this.img = newValue;
    // }

    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }
}

customElements.define("my-element", MyElement);
