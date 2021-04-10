import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
const port = 4000; // default port to listen


const app = express();
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );  
} );

let schemas = buildSchema(`
  type Query {
    hello: String
  }
`);

let root = {
    hello: () => {
      return 'Hello world!';
    },
  };


/* app.use('/graphql', graphqlHTTP({
    schema: schemas,
    rootValue: root,
    graphiql: true

})); */






// start the Express server

app.listen( port, () => {
    console.log( `⚡️[server]: Server started at http://localhost:${port}` );
} );