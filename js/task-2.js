class Storage {
  #items = [];

  constructor(arrayItems) {
    this.#items = arrayItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    if (this.#items.includes(itemToRemove)) {
      let itemsAfterRemove = [];
      const indexRemove = this.#items.indexOf(itemToRemove);
      itemsAfterRemove = this.#items
        .slice(0, indexRemove)
        .concat(this.#items.slice(indexRemove + 1));
      this.#items = itemsAfterRemove;
    }
  }
}

console.log('task-2');

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
