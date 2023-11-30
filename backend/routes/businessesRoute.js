import express from 'express';
import { Business } from '../models/yelpBusinessModel.js';

const router = express.Router();

//Gets all businesses in the database
router.get('/', async(request, response)=>{
    try{
        const businesses = await Business.find({});
        return response.status(200).json({
            count: businesses.length,
            data: businesses
        });
    }catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
});

//Gets business by city
router.get('/by-city/:city', async(request, response)=>{
    try{
        const { city } = request.params;
        const businesses = await Business.find({city:city});
        return response.status(200).json(businesses);
    }catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
});

//Gets business by Postal
router.get('/by-postal/:postal_code', async(request, response)=>{
    try{
        const { postal_code } = request.params;
        const businesses = await Business.find({postal_code:postal_code});
        return response.status(200).json(businesses);
    }catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
});
export default router;