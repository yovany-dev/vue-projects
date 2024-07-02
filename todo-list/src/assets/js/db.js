export default class Database {
  constructor(name) {
    this.localStorage = window.localStorage;
    this.name = name;
  }

  add(todos) {
    this.localStorage.setItem(this.name, JSON.stringify(todos));
  }

  get() {
    const stringify = localStorage.getItem(this.name);
    return JSON.parse(stringify);
  }
}
