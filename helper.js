import { client } from './index.js';
import {ObjectId} from 'mongodb'
async function DeleteByMovieId(id) {
  return await client.db("movies").collection("movies").deleteOne({ _id: ObjectId(id)});
}
 async function EditMovieById(id, data) {
  return await client.db("movies").collection("movies").updateOne({ _id: ObjectId(id) }, { $set: data });
}
 async function getMovies(filter) {
  return await client.db("movies").collection("movies").find(filter).toArray();
}
 async function CreateMovies(data) {
  return await client.db("movies").collection("movies").insertMany(data);
}
 async function getMovieById(id) {
  return await client
    .db("movies")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
export {DeleteByMovieId, EditMovieById,getMovies,CreateMovies,getMovieById}