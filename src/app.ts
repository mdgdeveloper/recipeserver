import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import 'express-async-errors';
import dotenv from 'dotenv'
dotenv.config()

// GRAPHQL configuration
import { typeDefs, resolvers } from './graphQL/config';

// Middleware imports 

// Mongoose
import mongoose from 'mongoose';
import { graphqlUploadExpress } from 'graphql-upload';

const app = express();

// Basic route define a route handler for the default home page
app.get( "/", ( _req, res ) => {
    res.send( "Hello world!" );  
} );


// Database connecton process
console.log('[⚡]: [Database]: connecting to', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> {
  console.log('[🟢]: [Database]: Connected to database');
})
.catch(( error ) => {
  console.log('[⭕] ERROR: Unable to connect to database ', process.env.MONGODB_URI, error.message);
})


const server = new ApolloServer({ uploads: false, typeDefs, resolvers});

// Use Public folder as accessible through express server 
app.use(cors());
app.use(express.static('public'));
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
app.use(express.json())


server.applyMiddleware({ app });




export default app;