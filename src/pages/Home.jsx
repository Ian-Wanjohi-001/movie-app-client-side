import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "../components/Appbar";
import Footer from "../components/Appfooter";
import "./Home.css";
import { movieImageNames } from "../components/Images";
import LoadingData from "../components/LoadingData";




const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://moviereccomendationapi.azurewebsites.net/movies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log("error fetching movies", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const mappedMovieData = movies.map((movie, index) => {
    const movieImageName = movieImageNames[index];
    const imageUrl = movieImageName;
    
    return {
      ...movie,
      imageUrl,
    };
  });

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };
  return (
    <div>
      <AppBar />
      {
        mappedMovieData.length === 0 ? (
          <LoadingData loadingThing="Loading Movies For You ..."/>
        ) : (
      <div className="movie-grid">
        {mappedMovieData.map((movie) => (
          <div key={movie.movie_id} className="card-container">
            <div className="img-synopsis-container">
              <div className="img-container">
                <img className="movie-img" src={movie.imageUrl} alt={movie.title} />
              </div>
              <div className="synopsis-container">
                <span className="synopsis-title-container">
                  <h2 className="synopsis-title">Synopsis</h2>
                  <hr style={{width:'80%'}} />
                <p className="synopsis">{movie.synopsis}</p>
                </span>
               
              </div>
            </div>
            <div className="title-release-date">
              <h2 className="movie-title">{truncateText(movie.title, 2)}</h2>
              <p className="release-date">{new Date(movie.release_date).toLocaleDateString()}</p>
            </div>
            <div className="movie-details">
            {/* <p className="movie_id">id :{movie.movie_id}</p> */}
              <p className="cast">Cast: {truncateText(movie.cast, 2)}</p>
              <p className="crew">Crew: {movie.crew}</p>
              <p className="runtime">Runtime: {movie.runtime} Minutes</p>
            </div>
            <Link to="rate-movie" className="rate-btn">
              Continue To Rate Movie
            </Link>
          </div>
        ))}
      </div>
)}
      <Footer message=" Thank you for visiting this  Movie Recommendation App🤝"/>
    </div>
  ); 
};

export default Home;
