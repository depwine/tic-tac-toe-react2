"use strict";
require("dotenv").config();
const { connect } = require("http2");
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const dbName = "ticTest"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
const client = new MongoClient(MONGO_URI, options)


const postNew = async (req, res) => {

    const body = req.body;

    console.log(body);

    const queryBody = { 
        _id : body._id,
        id: body.id,
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age
    }

    try{

        //conn
        await client.connect()

        //db 
        const db = client.db(dbName)
        console.log("connected")

        //try
        const result = await db.collection("data").insertOne(queryBody)

        if (result){
            res
                .status(200)
                .json({
                    status: 200,
                    data: result
                })
        }

    } catch(err) {

        //err
            res
                .status(500)
                .json({
                    status: 500,
                    message: "failed to add user"
                })

    }

    //disc
    client.close()
    console.log("disconnected")
}

module.exports = {postNew}