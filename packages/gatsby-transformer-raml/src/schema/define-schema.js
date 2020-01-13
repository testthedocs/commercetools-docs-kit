const defineRamlType = require('./define-raml-type');
const defineRamlResource = require('./define-raml-resource');
const defineRamlApi = require('./define-raml-api');

const defineSchema = ({ schema, createTypes }) => {
  defineRamlType({ schema, createTypes });
  defineRamlResource({ schema, createTypes });
  defineRamlApi({ schema, createTypes });
};

module.exports = defineSchema;