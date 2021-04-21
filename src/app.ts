import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import 'express-async-errors';

// Controllers import (Routes)
import recipesRouter from './controllers/recipes';

// GRAPHQL configuration
import { typeDefs, resolvers } from './graphQL/config';

// Middleware imports 

// Mongoose
import mongoose from 'mongoose';

// Database connecton process
const MONGODB_URI = "mongodb+srv://fullstack:mdg1984@cluster0.usexm.mongodb.net/recipeapp?retryWrites=true&w=majority";
console.log('[⚡]: [Database] connection: ', MONGODB_URI);


const app = express();

// Basic route define a route handler for the default home page
app.get( "/", ( _req, res ) => {
    res.send( "Hello world!" );  
} );


// Database connection 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> {
  console.log('[🟢] Connected to database');
})
.catch(( error ) => {
  console.log('[⭕] ERROR: Unable to connect to database ', MONGODB_URI, error.message);
})


const server = new ApolloServer({ typeDefs, resolvers});


server.applyMiddleware({ app });

app.use(cors());
app.use(express.static('build'))
app.use(express.json())


app.use('/api/recipes', recipesRouter)

export default app;