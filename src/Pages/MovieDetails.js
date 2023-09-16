import { useParams } from "react-router-dom";
import Poster from "../assets/head-image.png";
import BestMovies from "../assets/trio.png";
import React, { useEffect, useState } from "react";

const MovieDetail = () => {
  const {id} = useParams();
  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

const getMovie = () => {
    setTimeout(() => {
      fetch(
        'https://api.themoviedb.org/3/movie/' + id + '?api_key=34364dc88e8dce9f4c84e3b56fe07db4'
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setMovieList(data.results);
          setIsLoading(false);
        })

        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="MainContent">
      {error && <div> {error} </div>}
      {isLoading && <div> Loading....... </div>}
        <div className="main">
          <div className="main-content">
            <div className="main-row1">
              <div>
                <img src={Poster} className="movie-poster" alt="poster"></img>
              </div>
            </div>

            <div className="titleRow">
              <div className="title">
                <span data-testid="movie-title">movie.title</span> .{" "}
              </div>
              <div className="releaseDate">
                <span data-testid="movie-release-date">movie.release_date</span>
              </div>
            </div>
            <div className="secondRow">
              <div className="secondSubRow">
                <p className="overview" data-testid="movie-overview">
                  movie.overview
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
