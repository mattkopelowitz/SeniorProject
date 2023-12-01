import express from 'express';
import { Business } from '../models/yelpBusinessModel.js';

const router = express.Router();

//Gets all businesses matching the query
router.get('/', async(request, response)=>{
    try{
        let query = {};
        if(request.query.name){
            query.name = {$regex: new RegExp(request.query.name, 'i')};
        }
        if(request.query.city){
            query.city = {$regex: new RegExp(request.query.city, 'i')};
        }
        if(request.query.postal_code){
            query.postal_code = request.query.postal_code;
        }
        if(request.query.categories){
            query.categories = {$regex: new RegExp(request.query.categories, 'i')};
        }
        const businesses = await Business.find(query);
        return response.status(200).json({
            count: businesses.length,
            data: businesses
        });
    }catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
});
export default router;