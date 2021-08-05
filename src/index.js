const { ApolloServer } = require('apollo-server');
const {resolvers} = require('./graphql/resolvers');
const {typeDefs} = require('./graphql/typeDefs');
const { connect } = require('./schemas');

connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});