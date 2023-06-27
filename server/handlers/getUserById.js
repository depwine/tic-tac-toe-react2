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

const getUserById = async (req, res) => {

    const body = req.params.id

    const queryParams = {
        id : Number(body)
    }

    try{

        //conn
        await client.connect()

        //db
        const db = client.db(dbName);
        console.log("connected")

        //get
        const result = await db.collection("data").findOne(queryParams)

        if (result) {
            res
                .status(200)
                .json({
                    status: 200,
                    data: result
                })
        }

    } catch (err) {
        //err
        res
            .status(404)
            .json({
                status: 404,
                message: `${body} not found`
            })
    }


    //dic
    client.close()
    console.log("disconnected")
}

module.exports = {getUserById}