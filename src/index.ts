import app from './app';


const port = 4000; // default port to listen

//start the Express server
app.listen( port, () => {
  console.log( `[⚡️]: [server]: Server started at http://localhost:${port}` );
} );
