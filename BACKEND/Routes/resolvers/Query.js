function ola(_, { valor }) {
  return `Hello world ${valor}`;
}

function ingredient() {
  const data = {
    description: 'Batata',
    unit: 'Gram',
    quantity: 5,
  };

  return data;
}

function recipe() {
  const ingredientToAdd = {
    description: 'Batata',
    unit: 'Gram',
    quantity: 5,
  };

  return {
    id: 'my-id',
    description: 'Pure de batata',
    status: 'ACTIVE',
    price: 34,
    difficult: 'EASY',
    ingredients: [ingredientToAdd],
  };
}

module.exports = {
  ola,
  ingredient,
  recipe,
};
