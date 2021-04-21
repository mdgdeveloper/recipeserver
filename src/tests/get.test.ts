import mongoose from 'mongoose';
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> {
  console.log('[🟢] Connected to database');
})
.catch(( error ) => {
  console.log('[⭕] ERROR: Unable to connect to database ', process.env.MONGODB_URI, error.message);
})


