import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
const port = 4000; // default port to listen


const app = express();
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );  
} );

// Construct a schema, jusing GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  }
}

// Launch a new Apollo Server
const server = new ApolloServer({ typeDefs, resolvers});


server.applyMiddleware({ app });

/* app.use('/graphql', graphqlHTTP({
    schema: schemas,
    rootValue: root,
    graphiql: true

})); */






// start the Express server

app.listen( port, () => {
    console.log( `⚡️[server]: Server started at http://localhost:${port}${server.graphqlPath}` );
} );