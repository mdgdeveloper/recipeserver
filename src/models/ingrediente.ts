import mongoose from 'mongoose';

const ingredienteSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    cal: Number,
}, { collection: 'ingredients' })

ingredienteSchema.set('toJSON', {
    transform: (_document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.model('Ingrediente', ingredienteSchema )