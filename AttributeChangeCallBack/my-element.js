class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observerdAttributes() {
    return ["title", "paragraph", "img"];
  }

  attributeChangeCallback(attribute, oldAttribute, newAttribute) {
    if (attribute === "title") {
      this.title = newAttribute;
    }
    if (attribute === "paragraph") {
      this.paragraph = newAttribute;
    }
    if (attribute === "img") {
      this.img = newAttribute;
    }
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
}

customElements.define("my-element", MyElement);
