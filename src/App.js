import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";

const movieAPI ="https://api.themoviedb.org/3/discover/movie?api_key=36b8cb0002148c0783e7f21b19b72e7d&sort_by=popularity.desc&page=1";

function App() {
  const [movies, setMovies] = useState([]);

  function getMovies(){
       fetch(movieAPI)
      .then((res) => res.json())
      .then((data) =>{ 
      setMovies(data.results)
      });
  }
  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div>
      {movies.map((movie) => (
        <Movie 
        id
        key
        title
        
        />
      ))}
    </div>
  );
}

export default App;
