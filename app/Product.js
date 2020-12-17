export class Product {
    htmlElements = {
        listImg: document.getElementById('js-list-panel--start'),
        addUl: document.getElementById('js-list-panel-ul'),
    }

    constructor (name, /* category="produkt", amount=1 */) {
    this.name = name;
/*     this.category = category;
    this.amount = amount; */
    }

    createProduct() {
        this.htmlElements.listImg.classList.add('hidden');
        const product = document.createElement('li');
        product.classList.add('list-panel--with-products--li');
        product.textContent = this.name;
        this.htmlElements.addUl.appendChild(product)
    }
}