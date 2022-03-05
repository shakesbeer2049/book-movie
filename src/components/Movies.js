import Details from "./Details";
import axios from "axios";
import Booking from "./Booking";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [bookingDetails, setBookingDetails] = useState([])
  let bookingObj = []

  useEffect(()=> {
    axios.get(`https://api.tvmaze.com/search/shows?q=a`)
    .then(res => setMovies(res.data)
    ).catch(err => console.log(err)
    )
  },[])

  function onMovieClick(id) {
    console.log(id);
    let movieToFind = movies.find((movie) => movie.show.id === id);
    setMovieDetails(movieToFind);
  }

  function onMovieSearch(e){
      setSearchTerm(e.target.value)
      if(e.target.value){
        axios.get(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(res => setMovies(res.data)
        ).catch(err => console.log(err)
        )
      }
    console.log(e.target.value)
    
  }
  let movieList = movies.map((movie) => {
    return (
      <li
        key={movie.show.id}
        className=" show-card w-fit m-auto py-2 md:p-4 mb-4"
      >
        <button
          onClick={() => {
            onMovieClick(movie.show.id);
          }}
        >
          <img src={`${movie.show.image?movie.show.image.medium:""}`} alt="poster" />
          <span className="text-2xl">{movie.show.name} </span>{" "}
          <span className="text-orange-500">{movie.show.rating.average}</span>
        </button>
      </li>
    );
  });

  return (
  <>
  <input className="border-black border-2 rounded m-auto ml-2" onChange={(e) => {onMovieSearch(e)}} placeholder="search" value = {searchTerm || ''} />
    <Booking bookingObj={bookingObj} bookingDetails = {bookingDetails} />
    <div className="main-div flex md:flex-row">
        
        <ul className="show-list md:flex-col border-black border-2 w-2/5  ">
          {movies.length?movieList:<h1>No Matches Found</h1>}
        </ul>
        {<Details movieDetails={movieDetails} bookingDetails = {bookingDetails} setBookingDetails = {setBookingDetails} bookingObj = {bookingObj} />}
      </div>
      </>
  );
};
export default Movies;
