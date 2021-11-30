import { getMovies,getMovieById, CreateMovies, EditMovieById, DeleteByMovieId } from '../helper.js';
import express from 'express';

const router = express.Router();
router
  .route("/")
  .get(async (req, res) => {

    const filter = req.query;
    const filteredMovies = await getMovies(filter); //cursor to array
    res.send(filteredMovies);
  })
  .post(async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await CreateMovies(data);
    res.send(result);
  });

router
  .route("/:id")
  .get( async (req, res) => {

  const { id } = req.params;
  const movie = await getMovieById(id);
 movie ? res.send(movie) : res.status(404).send({ message: "no match found" });
})
  .put( async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const result = await EditMovieById(id, data);
  const movie = await getMovieById(id);
  res.send(movie);
})
  .delete( async (req, res) => {
  const { id } = req.params;
  const result = await DeleteByMovieId(id);
  result.deletedCount > 0 ? res.send(result) : res.send({ message: "No matching movie Found" });
});

export const moviesRouter = router;