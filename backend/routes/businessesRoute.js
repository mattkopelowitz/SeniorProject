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

//Gets business by ID
router.get('/:id', async(request, response)=>{
    try{
        const { id } = request.params;
        const business = await Business.findById(id);
        return response.status(200).json(business);
    }catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
});

export default router;