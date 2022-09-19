// eslint-disable-next-line no-unused-vars
const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');

const schemaPath = './Routes/schema/index.graphql';
const resolvers = require('./Routes/resolvers');

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.info(`🚀 Server ready at ${url}`);
});
