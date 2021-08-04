class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="product-card-imgBox">
          <h2 class="product-card-imgBox__title">${this.boxtitle}</h2>
          <img class="product-card-imgBox__img" src=${this.boximg} alt="" />
        </div>
        <div class="product-card-details">
          <div class="product-card-details__type">
            <h2 class="product-card-details__type-name">${this.name}</h2>
            <span class="product-card-details__type-collection">${
              this.collection
            }</span>
          </div>
          <div class="product-card-details__description">
            <p>${this.description}</p>
          </div>
          <div class="product-card-details__price">
            <span class="product-card-details__price-amount">${
              this.price
            }</span>
            <button
              class="product-card-details__price-buy"
              type="button"
            >${this.buy}</button>
          </div>
        </div>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
      :host {
        --prymary-color: #5a6cb2;
        width: 100%;
        min-width: 280px;
        height: auto;
        display: grid;
        grid-template-rows: 250px 300px;
        row-gap: 32px;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .product-card-imgBox {
        width: 100%;
        height: 100%;
        display: grid;
        grid-auto-rows: min-content;
        padding: 5px 10px;
        background: var(--prymary-color);
      }

      .product-card-imgBox__title {
        position: absolute;
        z-index: 1;
        font-size: 8rem;
        opacity: 0.1;
      }

      .product-card-imgBox__img {
        width: auto;
        max-height: 26%;
        justify-self: center;
        position: relative;
        top: 10px;
        object-fit: contain;
      }

      .product-card-details {
        width: 100%;
        height: 100%;
        padding: 50px 20px;
        display: grid;
        row-gap: 32px
      }

      .product-card-details__type-name {
        font-size: 3.2rem;
        color: #444;
      }

      .product-card-details__type-collection {
        font-size: 1.6rem;
        font-weight: 700;
        color: #999;
      }

      .product-card-details__description {
        height: auto;
        font-size: 1.4rem;
      }
      
      .product-card-details__price {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .product-card-details__price-amount {
        height: min-content;
        font-size: 3.2rem;
        font-weight: 700;
        color: #a2a2a2;
      }

      .product-card-details__price-buy {
        width: 120px;
        height: 50px;
        background: var(--prymary-color);
        border: none;
        border-radius: 25px;
        font-size: 1.6rem;
        font-weight: 700;
        color: white;
      }

      @media (min-width: 800px) {
        :host {
          width: 800px;
          height: 450px;
          grid-template-rows: 450px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
        }

        .product-card-imgBox__img {
          width: auto;
          max-height: 400px;
          right: 150px;
          top: 15px;
          transform: rotate(-30deg);
        }

        .product-card-details__description {
          padding-left: 60px;
        }
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
    return [
      "boxtitle",
      "boximg",
      "name",
      "collection",
      "description",
      "price",
      "buy",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }
}

customElements.define("product-card", ProductCard);
