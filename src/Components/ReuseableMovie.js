import { Link } from "react-router-dom";
import apple from "../assets/apple.png";
import IMDB from "../assets/IMDB.png";

const Reuseable = ({ movieList }) => {
  console.log(movieList);

  return (
    <div className="movieSession" data-testid="movie-card">
      {movieList.map((movie) => (
        <div className="mainMovieSession" key={movie.id}>
          <div className="image">
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
                className="posters"
                data-testid="poster"
              />
            </Link>
          </div>
          <div className="contents">
            <p>
              <span data-testid="movie-release-date">{movie.release_date}</span>
            </p>
          </div>
          <h6 data-testid="movie-title"> {movie.title} </h6>
          <div className="popularity">
            <div>
              <img src={IMDB} alt="thumbnail" />
              <span> {Math.round(movie.genre_ids[1])}/100 </span>
            </div>
            <div>
              <img src={apple} alt="thumbnail" />
              <span> {Math.round(movie.popularity)}% </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reuseable;
