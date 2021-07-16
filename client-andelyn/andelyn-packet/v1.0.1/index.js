const schema = require('./schema.json');
const elasticsearch = require('./elasticsearch.json');
const athena = require('./athena.json');
const expected = require('./expected.json');

module.exports = {
  expected,
  schema,
  elasticsearch,
  athena,
};