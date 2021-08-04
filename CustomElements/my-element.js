// const template = document.createElement("div");
// template.innerHTML = `
//   <style>
//   .texto {
//     color: green;
//   }
//   p {
//     color: blue;
//   }
//   </style>
//   <p class="texto">Hola mundo en español</p>
//   <p>Example of a paragraph</p>
// `;

class MyElement extends HTMLElement {
  constructor() {
    super();
    // this.p = document.createElement("p");
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>Hola mundo en español</h2>
        <div>
          <p>Mas texto en español</p>
        </div>
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
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    // this.p.textContent = "Hello, world 😍";
    // this.appendChild(this.p);
    // this.appendChild(template);
    this.render();
  }
}

customElements.define("my-element", MyElement);
