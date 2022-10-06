class User {
  constructor(json) {
    this.id = json.id;
    this.name = json.name;
  }
}

module.exports = { User };
