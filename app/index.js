//const express = require('express')
import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/routes.js";


const app = express()
const port = 3030


app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow_Methods','GET','POST','PUT','DELETE');
  next();
});
app.get('/', (req, res) => {

  res.send('Hello World!')
});
app.use('/users', userRoutes);

try {
  app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`)
  })
} catch (error) {
  console.log(error);
}

