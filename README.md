# recipeserver
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

**Version**: 0.1.1

![status](https://img.shields.io/badge/status-up-green)


## GraphQL Documentation 
Version 0.1-alpha

### List of Queries
🟢 Completed
- getAllRecipes()
- getRecipe(id)
- getIngredient(id)
- getAllIngredients()
### List of Mutations
🟢 Completed
- addRecipe() // Completed
- addIngredient() // Completed 
- editRecipe() // Completed
- editIngredient() // Completed

#### Mutation to store
```javascript
mutation{
 addRecipe(
  nombre: "Ganso con patatas",
  ingredientes: [
    {
      ingrediente: "60844aedda751c7ab095bba5",
      cantidad: 1,
      peso: 150,
    },
    {
      ingrediente: "607f2a0ed6fc2e1c436737e3",
      cantidad: 1,
      peso: 350,
    },
    {
      ingrediente: "607f29d8d6fc2e1c436737e1",
      cantidad: 1,
      peso: 450,
    }
  ],
  pasos: [
    "Pon la carrillera al fuego lento durante 15 minutos",
    "Corta en juliana las verduras",
    "Prepara en un recipiente a parte la salsa",
    "Pela las patatas y aparta la salsa",
    "Añade las especias y remueve durante 20 minutos",
    "Termina la presentación y emplata"
  ],
  tiempo: 120,
  personas: 3,
  tipo: "carne",
  imagen: "https://recetasdecocina.elmundo.es/wp-content/uploads/2019/09/receta-carrilleras.jpg"
){
  nombre
}
}
```

- [ ] Define Tests 
- [ ] Evaluate the mutations


# Version Log
## 0.1 (Alpha)
- 0.1.1: GraphQL Base Version
- 0.1.2: GraphQL TryCatch Error management 
- 0.1.3: Tests 


