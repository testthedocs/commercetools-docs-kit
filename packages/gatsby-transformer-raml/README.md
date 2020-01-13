# Gatsby Transformer RAML

## Overview

This plugin parses RAML documents as YAML documents using [JS-YAML parser](https://github.com/nodeca/js-yaml). The parsed RAML documents are expected to be autogenerated from [rmf-codegen](https://github.com/vrapio/rmf-codegen).

## Autogenerating RAML Documents

Get a copy of the latest [rmf-codegen](https://github.com/vrapio/rmf-codegen), run a cli in the root directory, then do the following steps:

1. Create jar file

`./gradlew shadow`

2. Copy jar file to main

`cp tools/cli-application/build/libs/rmf-gen.jar .`

3. Generate flattened raml files from api.raml

`time ./rmf-gen.sh generate -o <output-directory> -t ramldoc <target-document>`

For more info about the rmf-codegen commands, run this:

`time ./rmf-gen.sh help generate`

## Installation

`npm install @commercetools-docs/gatsby-transformer-raml`

### Usage

As a prerequisite configure `gatsby-source-filesystem` plugin to point the directory of the auto-generated RAML specs, for example `src/api-specs`. The `apiKey` for each node on GraphQL is derived from the api.raml directory.

Example `gatsby-config.js` content:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api-specs`,
        path: `${__dirname}/src/api-specs`,
      },
    },
    {
      resolve: `@commercetools-docs/gatsby-transformer-raml`,
      options: {},
    },
  ],
};
```

## A typical GraphQL query

Example for reading all types:

```graphql
{
  allRamlType {
    nodes {
      apiKey
      builtinType
      constant
      description
      discriminator
      discriminatorValue
      displayName
      enumDescriptions {
        name
        description
      }
      enumeration
      examples {
        name
        value
      }
      oneOf
      properties {
        beta
        builtinType
        constant
        default
        deprecated
        description
        discriminatorValue
        enumeration
        items {
          type
        }
        maxItems
        maxLength
        maximum
        minItems
        minLength
        minimum
        name
        pattern
        required
        type
        uniqueItems
      }
      refersTo
      type
    }
  }
}
```