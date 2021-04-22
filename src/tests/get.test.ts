import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

// Conexion basica con la base de datos mongodb
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> {
  console.log('[🟢] Connected to database');
})
.catch(( error ) => {
  console.log('[⭕] ERROR: Unable to connect to database ', process.env.MONGODB_URI, error.message);
})


// Definicion de los tests

