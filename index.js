// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('Products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();


const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/e-comm';
mongoose.connect(url)
.then(()=>console.log("connecting successfully"))
.catch((err)=>console.warn(err));


const ProductsSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    Phone:{
        type : Number,
        required : true
    },
    fees:{
        type : Boolean,
        required : true
    },
    Date :{
        type: Date,
        default : Date.now
    }
})

const Product = new mongoose.model("Products", ProductsSchema);

// const createProduct  = new Product({
//     name : "Rohit",
//     Phone : 8767100736,
//     fees : true
// });

// createProduct.save();

const createProducts = async () =>{
    try{
        const newProduct = new Product({
            name : 'samir',
            Phone : 789084398,
            fees : false
        })
        const productData = await newProduct.save();
    }catch(error){
console.log(error.message);
    }
}

createProducts()







// nodemon have start >>cmd :  npm run serve