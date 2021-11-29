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
const movies=[
 {
  "id": "100",
  "name": "Avengers:Endgame",
  "poster": "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
  "rating": "8.4",
  "runtime": "3h",
  "genre": "Action/Sci-Fi",
  "overview": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  "director": "Russo Brothers",
  "yor": "2019",
  "cast": "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth",
  "trailer": "https://www.youtube.com/embed/TcMBFSGVi1c",
  language:"English"
 },
 {
  "id": "101",
  "name": "The Dark Knight",
  "poster": "https://img.posterlounge.co.uk/images/l/1899010.jpg",
  "rating": "9",
  "runtime": "2h 32min",
  "genre": "Action,Crime,Drama",
  "overview": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "director": "Christopher Nolan",
  "yor": "2008",
  "cast": "Christian Bale, Heath Ledger",
  "trailer": "https://www.youtube.com/embed/_PZpmTj1Q8Q",
   language:"English"
 },
 {
  "id": "102",
  "name": "Inception",
  "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
  "rating": "8.8",
  "runtime": "2h 28min",
  "genre": "Action/Sci-Fi",
  "overview": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  "director": "Christopher Nolan",
  "yor": "2010",
  "cast": "Leonardo Di-Caprio, Tom Hardy, Cillian Murphy",
  "trailer": "https://www.youtube.com/embed/Qwe6qXFTdgc",
   language:"English"
 },
 {
  "id": "103",
  "name": "Interstellar",
  "poster": "https://www.joblo.com/wp-content/uploads/2014/09/interstellar_water-1.jpg",
  "rating": "8.6",
  "runtime": "2h 49min",
  "genre": "Adventure/Sci-Fi",
  "overview": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  "director": "Christopher Nolan",
  "yor": "2014",
  "cast": "Mathew McConaughey, Anne Hathaway",
  "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E",
   language:"English"
 },
 {
  "id": "104",
  "name": "The Dark Knight Rises",
  "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
  "rating": "8.4",
  "runtime": "2h 45min",
  "genre": "Action/Thriller",
  "overview": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
  "director": "Christopher Nolan",
  "yor": "2012",
  "cast": "Christian Bale, Anne Hathaway, Tom Hardy",
  "trailer": "https://www.youtube.com/embed/g8evyE9TuYk",
   language:"English"
 },
 {
  "id": "105",
  "name": "The Matrix",
  "poster": "https://mypostercollection.com/wp-content/uploads/2018/07/The-Matrix-Poster-MyPosterCollection.com-14.jpg",
  "rating": "7.9",
  "runtime": "2h 16min",
  "genre": "Action/Sci-Fi",
  "overview": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  "director": "Lana Wachowski",
  "yor": "1999",
  "cast": "Keanu Reaves, Carrie-Annie Moss",
  "trailer": "https://www.youtube.com/embed/tGgCqGm_6Hs",
   language:"Spanish"
 },
 {
  "name": "Jai Bhim",
  "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
  "rating": "9.6",
  "runtime": "2h 44m",
  "genre": "Crime,Drama",
  "overview": "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
  "director": " T.J. Gnanavel",
  "yor": "2021",
  "cast": " Suriya,Lijo Mol Jose,Manikandan",
  "trailer": "https://www.youtube.com/embed/Gc6dEDnL8JA",
  "id": "106",
   language:"Tamil"
 }
]
const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send("Hello World***")
});
app.listen(7000)


app.get("/movies/:id", (req, res) => {

 const { id } = req.params;
 const movie = movies.find((movie) => movie.id === id);
 movie ? res.send(movie) : res.status(404).send({ message: "no match found" });
})
// /movies query
app.get("/movies", (req, res) => {

 const { language,rating } = req.query;
 let filteredmovies = movies;
 console.log(language,rating)
 if (language)
  filteredmovies = filteredmovies.filter((movie) => movie.language===language)
 if (rating)
  filteredmovies = filteredmovies.filter((movie) => movie.rating===rating)

res.send(filteredmovies)
})

