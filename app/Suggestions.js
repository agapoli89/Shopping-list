import { LocalStorage } from "./LocalStorage.js";

export class Suggestions {
    constructor() {
        const _listOfSuggestions = localStorageObj.getSuggestions();
        this.showSuggestions = () => _listOfSuggestions;
    }
    searchProduct(event) {
        console.log(event.target.value);
        
    }
}

const localStorageObj = new LocalStorage();