import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import businessesRoute from "./routes/businessesRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

//Allow all origins to get data
app.use(cors());

app.get('/', (request, responce)=>{
    console.log(request)
    return responce.status(234).send('Welcome')
});

app.use('/Businesses', businessesRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("connected to DB");
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
})