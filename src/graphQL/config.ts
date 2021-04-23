import { gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import Receta from '../models/receta';
import Ingrediente from '../models/ingrediente';
import { coerceInputValue } from 'graphql';


mongoose.model('Ingrediente', )

// Gestion de la conexion con MongoDB 

// Construct a schema, jusing GraphQL schema language
const typeDefs = gql`


input IngredientInput{
  id: ID!
  cantidad: Int!
  peso: Float!
}

type Ingredient{
  id: ID!
  nombre: String!
  precio: Float
  precioUnidad: Boolean
  cal: Float
}

type IngredientRecipe{
  ingrediente: Ingredient!
  cantidad: Int
  peso: Float

}  

type Recipe{
  id: ID!
  nombre: String!
  ingredientes: [IngredientRecipe!]!
  pasos: [String!]!
  tiempo: Int!
  personas: Int!
  tipo: String!
  imagen: String
}


  type Query {
    getAllRecipes: [Recipe]!
    getRecipe(id: ID!): Recipe
    getIngredient(id: ID!): Ingredient
    getAllIngredients: [Ingredient]!
  }


  type Mutation {
    addRecipe(
      nombre: String!
      ingredientes: [IngredientInput!]!
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
    editRecipe(
      id: ID!
      nombre: String!
      ingredientes: [IngredientInput!]!
      pasos: [String]!
      tiempo: Int!
      personas: Int!
      tipo: String!
      imagen: String
    ):Recipe
    editIngredient(
      id: ID!
      nombre: String!
      precio: Float
      cal: Float
    ): Ingredient
}
`;


// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getAllRecipes: async () => {
      const recetas = await Receta.find({})
      .populate({ 
        path:'ingredientes.ingrediente', model: 'Ingrediente' });
      return recetas;
    },
    getRecipe: async (_root: any, args: any) => {
      const receta = await Receta.findOne({ _id: args.id })
      .populate({
        path:'ingredientes.ingrediente', model: 'Ingrediente'
      });
      return receta;
    },
    getAllIngredients: async () => {
      const ingredients = await Ingrediente.find({});
      return (ingredients);
    },
    getIngredient: async (_root: any, args: any) => {
      const ingredient = await Ingrediente.findOne({_id: args.id})
      return(ingredient);
    },
  }
}
  



  export { resolvers, typeDefs };