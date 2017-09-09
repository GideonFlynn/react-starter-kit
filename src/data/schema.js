import { merge } from 'lodash';
import { makeExecutableSchema, addErrorLoggingToSchema } from 'graphql-tools'; // eslint-disable-line no-unused-vars

import {
  schema as DatabaseSchema,
  resolvers as DatabaseResolvers,
  mutations as DatabaseMutations,
  queries as DatabaseQueries,
} from './types/Database/schema';

const logger = { log: e => console.error(e.stack) };

const RootQuery = [
  `
  type RootQuery {
    ${DatabaseQueries}
  }
`,
];

const Mutation = [
  `
  type Mutation {
    ${DatabaseMutations}
  }
`,
];

const SchemaDefinition = [
  `
  schema {
    query: RootQuery
    mutation: Mutation
  }
`,
];

// Merge all of the resolver objects together
// Put schema together into one array of schema strings
const resolvers = merge(DatabaseResolvers);

const schema = [
  ...SchemaDefinition,
  ...RootQuery,
  ...DatabaseSchema,
  ...Mutation,
];

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  logger,
});
