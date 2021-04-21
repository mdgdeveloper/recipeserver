import { gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import Receta from '../models/receta';
import Ingrediente from '../models/ingrediente';


mongoose.model('Ingrediente', )

// Gestion de la conexion con MongoDB 

// Construct a schema, jusing GraphQL schema language
const typeDefs = gql`

type Ingredient{
  nombre: String!
  precio: Float
  cal: Float
}

type IngredientRecipe{
  ingredientID: ID!
  ingrediente: Ingredient!
  cantidad: Int
  peso: Float

}  

type Recipe{
  recipeID: ID!
  nombre: String!
  ingredientes: [IngredientRecipe!]!
  pasos: [String!]!
  tiempo: Int!
  personas: Int!
  tipo: String!
  imagen: String
}


  type Query {
    recipes: [Recipe]!
    recipe(recipeID: ID!): Recipe
    ingredient(intredientID: ID!): Ingredient
    hello: String
  }


  type Mutation {
    addRecipe(
      nombre: String!
      ingredientes: [ID!]!
      pasos: [String]!
      tiempo: Int!
      personas: Int!
      tipo: String!
      imagen: String
    ): Recipe
    addIngredient(
      nombre: String!
      precio: Float
      cal: Float
    ): Ingredient



  }
`;


// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    recipes: (root: any, args: any) => {
      const ingredientes = Ingrediente.find({});

      return Receta.find({})
      .populate({ 
        path:'ingredientes.ingrediente', model: 'Ingrediente' });
    }

  }
}
  



  export { resolvers, typeDefs };