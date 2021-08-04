class MyCustomeElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hello from the constructor - Memory");
  }

  connectedCallback() {
    console.log("Hello from the DOM");
  }

  disconnectedCallback() {
    console.log("Good bye DOM");
  }
}

customElements.define("my-custome-element", MyCustomeElement);

document.querySelector("my-custome-element").remove();
