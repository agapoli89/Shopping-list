export class UI {
  uiSelectors = {
      input: 'js-add-product-input',
      btn: 'js-add-product-btn',
      inBasket: 'js-number-in-basket',
      numberToBuy: 'js-number-to-buy',
      productsLS: '.list-panel--with-products li',
      divWithProducts: 'js-list-panel--with-products',
      divWithImage: 'js-list-panel--start',
      ulAdd: 'js-list-panel-ul',
      ulSearch: 'js-add-product-ul',
      liSuggestions: '.add-product-panel__input--li',
  }  
  getElement(selector) {
      return document.getElementById(selector)
  }
  getElements(selector) {
      return document.querySelectorAll(selector)
  }
}