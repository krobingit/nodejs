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

const app = express();
app.use(express.json()); //inbuilt middleware
//every req in the app body is parsed as JSON
dotenv.config(); //all keys it will put in process.env
const PORT = process.env.PORT;


async function CreateConnection() {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  console.log("Mongodb Connect")
  return client;
}
const client = await CreateConnection();


app.get('/', (req, res) => {
 res.send("Hello World***")
});


app.get("/movies/:id", async (req, res) => {

  const { id } = req.params;
  const movie = await client.db("movies").collection("movies").findOne({ id: id });
 //const movie = movies.find((movie) => movie.id === id);
 movie ? res.send(movie) : res.status(404).send({ message: "no match found" });
})



app.get("/movies",async (req, res) => {

  const filter = req.query;
  const filteredMovies = await client.db("movies").collection("movies").find(filter).toArray()//cursor to array
  res.send(filteredMovies);
})

app.post("/movies", async (req, res) => {
  const data = req.body;
console.log(data)
  const result = await client.db("movies").collection("movies").insertMany(data);
  res.send(result);
})

app.put("/movies/:id", async (req, res) => {
  const data = req.body;
console.log(data)
  const result = await client.db("movies").collection("movies").insertMany(data);
  res.send(result);
})

app.listen(PORT);