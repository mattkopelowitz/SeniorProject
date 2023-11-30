import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
    business_id:String,
    name:String,
    address:String,
    city:String,
    state:String,
    postal_code:String,
    latitude:Number,
    longitude:Number,
    stars:Number,
    review_count:Number,
    is_open:Number,
    attributes:{
        BusinessAcceptsCreditCards:String,
        RestaurantsDelivery:String,
        RestaurantsTakeOut:String,
        Caters:String,
    },
    categories:String,
    hours:{
        Monday:String,
        Tuesday:String,
        Wednesday:String,
        Thursday:String,
        Friday:String,
        Saturday:String,
        Sunday:String,
    }
});

export const Business = mongoose.model('Business', businessSchema, 'Businesses');