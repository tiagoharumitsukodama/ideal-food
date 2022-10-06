/* eslint-disable no-console */
/* eslint-disable dot-notation */
const csv = require('csvtojson');
const path = require('path');
const uuid = require('uuid');
const { Transform } = require('stream');
const {
  createReadStream,
  createWriteStream,
  appendFile,
} = require('fs');

const inputVegetablesFile = path.resolve('vegetables.csv');
const outputVegetables = path.resolve('../dataSources', 'vegetables.json');
const field = 'NO_PRODUTO';

async function createVegetablesFile() {
  let counter = 0;
  const distinctArray = [];

  const readStream = createReadStream(inputVegetablesFile);
  const writeStream = createWriteStream(outputVegetables, 'utf8');

  const transformStream = new Transform({
    transform(chunk, enc, cb) {
      const data = chunk.toString();
      const name = JSON.parse(data)[field].replace(/[^0-9a-z\s-]/gi, '');

      if (distinctArray.find((e) => e === name)) {
        cb(null);
      } else {
        const item = `{"description":"${name}", "id":"${uuid.v4()}"}`;

        let result = `,${item}`;

        if (!counter) {
          result = `{"Items":[${item}`;
        }

        counter += 1;
        distinctArray.push(name);

        cb(null, result);
      }
    },
  });

  writeStream.on('finish', () => {
    console.info(`Inserted ${counter} items`);
    appendFile(outputVegetables, ']}', 'utf8', (err) => {
      console.error(err);
    });
  });

  readStream
    .pipe(csv({ delimiter: ';', colParser: true, quote: false }))
    .pipe(transformStream)
    .pipe(writeStream);
}

module.exports = { createVegetablesFile };
