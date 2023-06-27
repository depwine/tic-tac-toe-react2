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

const getAll = async (req,res) => {

    try {

        // conn
        await client.connect();

        // conn db
        const db = client.db(dbName);
        console.log(`connected to ${dbName} collection`)

        // get
        const results = await db.collection("data").find().toArray();

        if (results) {

            res
                .status(200)
                .json({
                    status: 200,
                    message: "lookup successful",
                    data: results
                })

        }


    } catch (err) {

        res
            .status(400)
            .json({
                status: 400,
                message: "lookup failed"
            })

    }

    //disc
    client.close();
    console.log("disconnected!")
}

module.exports = { getAll }