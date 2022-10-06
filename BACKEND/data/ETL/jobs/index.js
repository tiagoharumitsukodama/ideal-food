/* eslint-disable no-console */
const { createVegetablesFile } = require('./createVegetablesData');

async function main() {
  await createVegetablesFile();
}

main()
  .then(console.info)
  .catch(console.error);
