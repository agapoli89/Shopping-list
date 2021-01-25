export class UI {
  uiSelectors = {
      input: 'js-add-product-input',
      btn: 'js-add-product-btn',
      inBasket: 'js-number-in-basket',
      productsLS: '.list-panel--with-products li',
      divWithProducts: 'js-list-panel--with-products',
      divWithImage: 'js-list-panel--start',
      ulAdd: 'js-list-panel-ul',
  }  
  getElement(selector) {
      return document.getElementById(selector)
  }
  getElements(selector) {
      return document.querySelectorAll(selector)
  }
}