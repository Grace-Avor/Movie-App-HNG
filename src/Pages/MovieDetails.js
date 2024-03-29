import { useParams } from "react-router-dom";
import Poster from "../assets/head-image.png";
import BestMovies from "../assets/trio.png";
import React, { useEffect, useState } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [movieData, setMovieData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=34364dc88e8dce9f4c84e3b56fe07db4";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())

      .then((json) => setMovieData(json));
  }, [url]);

  return (
    <div className="MainContent">
      <div className="main">
        <div className="main-content">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
                className="movie-poster"
                alt="poster"
              ></img>
            </div>

          <div className="titleRow">
            <div className="title">
              <h6 data-testid="movie-title" className="h1-title">{movieData.title}</h6>
            </div>
            <div className="releaseDate">
              <h6 data-testid="movie-release-date">{movieData.release_date}</h6>
            </div>
          </div>
          <div className="secondRow">
            <div className="secondSubRow">
              <p className="overview" data-testid="movie-overview">
                {movieData.overview}
              </p>
              <p>
                Director: <span className="colorPs">Joseph Kosinaki</span>
              </p>
              <p>
                Writers:{" "}
                <span className="colorPs">
                  Jim Cash, Jack Epps jr, Peter Craig
                </span>
              </p>
              <p>
                Stars:{" "}
                <span className="colorPs">
                  Tom Cruise, Jenifer Conolly, Miles Tailor
                </span>
              </p>
              <div className="buttonRow">
                <button className="top-rated">Top rated movie #65</button>
                <button className="Awards">Awards 9 nominations</button>
              </div>
            </div>
            <div className="sub-row2">
              <div className="ratings">
                <span className="faintColorP">⭐8.5</span>|
                <span className="faintColorP2">350k</span>
              </div>
              <div className="buttonRow2">
                <button className="showtimes">See Showtimes</button>
                <button className="more">More Watch Options</button>
              </div>
              <div>
                <img src={BestMovies} className="mixed-posters" alt="hhh" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
