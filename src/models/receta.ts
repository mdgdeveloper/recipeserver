import mongoose from 'mongoose';

const recetaSchema = new mongoose.Schema({
    nombre:  String,
    ingredientes: [
    {
        ingrediente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingrediente'
          },
          peso: Number,
          cantidad: Number
    }],
    pasos: [String],
    tiempo: Number,
    personas: Number,
    tipo: String,
    imagen: String,
}, { collection: 'recipes' })


recetaSchema.set('toJSON', {
    transform: (_document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.model('Receta', recetaSchema );
