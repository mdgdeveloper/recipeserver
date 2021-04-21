import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://fullstack:mdg1984@cluster0.usexm.mongodb.net/recipeapp?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> {
  console.log('[🟢] Connected to database');
})
.catch(( error ) => {
  console.log('[⭕] ERROR: Unable to connect to database ', MONGODB_URI, error.message);
})


