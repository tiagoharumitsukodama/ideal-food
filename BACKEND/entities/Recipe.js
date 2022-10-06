class Recipe {
  constructor(json) {
    this.id = json.id;
    this.description = json.description;
    this.status = json.status;
    this.price = json.price;
    this.difficult = json.difficult;
  }
}

module.exports = { Recipe };
