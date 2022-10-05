class Ingredient {
  constructor(json) {
    this.id = json.id;
    this.description = json.description;
  }
}

module.exports = { Ingredient };
