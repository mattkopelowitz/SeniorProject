const { ObjectId } = require('bson');
const mongoose = require('mongoose');


const URI = 'mongodb+srv://gatoradvisor2:gatoradvisor2@cluster0.zfsboxj.mongodb.net/mongodbVSCodePlaygroundDB?retryWrites=true&w=majority';
//const URI = 'mongodb+srv://gatoradvisor2:gatoradvisor2@cluster0.zfsboxj.mongodb.net/YelpFL?retryWrites=true&w=majority';
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;
const salesSchema = new Schema ({
  _id: {
    type: Number,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
const Sales = mongoose.model('sales', salesSchema);
Sales.find({item: 'abc'})
  .then ((result) => {
    console.log(result);
  });

/*const businessSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  business_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalCode: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  review_count: {
    type: Number,
    required: true
  },
  is_open: {
    type: Boolean,
    required: true
  },
  attributes: [{
    OutdoorSeating: {
      type: String,
      required: false
    },
    Alcohol: {
      type: String,
      required: false
    },
    Smoking: {
      type: String,
      required: false
    },
    GoodForMeal: {
      type: String,
      required: false
    },
    Wifi: {
      type: String,
      required: false
    },
    RestaurantsReservations: {
      type: String,
      required: false
    },
    RestaurantsAttire: {
      type: String,
      required: false
    },
    BusinessParking: {
      type: String,
      required: false
    },
    RestaurantsPriceRange2: {
      type: String,
      required: false
    },
    HasTV: {
      type: String,
      required: false
    },
    HappyHour: {
      type: String,
      required: false
    },
    BikeParking: {
      type: String,
      required: false
    },
    CoatCheck: {
      type: String,
      required: false
    },
    GoodForKids: {
      type: String,
      required: false
    },
    BusinessAcceptsCreditCards: {
      type: String,
      required: false
    },
    RestaurantsGoodForGroups: {
      type: String,
      required: false
    },
    RestaurantsDelivery: {
      type: String,
      required: false
    },
    RestaurantsTakeOut: {
      type: String,
      required: false
    },
    GoodForDancing: {
      type: String,
      required: false
    },
    Ambience: {
      type: String,
      required: false
    },
    Music: {
      type: String,
      required: false
    }
  }],
  categories: {
    type: String,
    required: true
  },
  Hours: [{
    Monday: {
      type: String,
      required: false
    },
    Tuesday: {
      type: String,
      required: false
    },
    Wednesday: {
      type: String,
      required: false
    },
    Thursday: {
      type: String,
      required: false
    },
    Friday: {
      type: String,
      required: false
    },
    Saturday: {
      type: String,
      required: false
    },
    Sunday: {
      type: String,
      required: false
    }
  }]

});
const Businesses = mongoose.model('Businesses', businessSchema);
Businesses.find( {name: 'Four Green Fields'} )
  .then((result) => {
    console.log(result);
  })*/



/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gatoradvisor2:gatoradvisor2@cluster0.zfsboxj.mongodb.net/YelpFL?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("YelpFL");
  var query = { address: "Four Green Fields" };
  dbo.collection("Businesses").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/