const products = require ("../data/data.json")

const { MongoClient } = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

// // create a new client

const client = new MongoClient(MONGO_URI, options);

const batchImportProducts = async (req, res) => {

    try{

        //connect to client
        await client.connect();

        //connect to db
        const db = client.db("ticTest");
        console.log("connected!")

        // create a new collection, products
        await db.collection("data").insertMany(products);

        
    } catch (err) {
        console.log("Failure: ", err);
    }

    client.close();
    console.log("disconnected!");

}

batchImportProducts()

