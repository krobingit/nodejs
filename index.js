//const [num1, num2] = [process.argv[2], process.argv[3]]
/*
const aww = require("os");
console.log(aww.version())
var fs = require("fs");
const { error } = require("console");
fs.readFile('./welcome.txt',"utf-8", (err, data) =>
 console.log(data))
const quote = "Hi.."

fs.writeFile('./awesome.txt', quote, (err) => console.log("err"))

for (let i = 1; i <= 10;i++)
{
fs.writeFile(`./backup/text-${i}.txt`,quote,(err)=>console.log("error"))
}*/

//const express =require('express') //type: commonjs
import express from 'express' //type: module
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { moviesRouter } from './routes/movies.js';
import cors from 'cors';

export const app = express();
//middleware-interceptor callback function whenever request is sent to the server.
//it spies on the request and executes a function code which changes however it feeds.
//app.use(path,callback)
app.use(cors());//cors middleware-every req accepts any origin
app.use(express.json()); //inbuilt middleware
//every req in the app body is parsed as JSON
dotenv.config(); //all keys it will put in process.env
const PORT = process.env.PORT;


async function CreateDBConnection() {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  console.log("Mongodb Connect")
  return client;
}
export const client = await CreateDBConnection();


app.get('/', (req, res) => {
 res.send("Server is running successfully!!!!!")
});



app.use("/movies", moviesRouter)


app.listen(PORT,()=>console.log("Server running on port:"+PORT));


