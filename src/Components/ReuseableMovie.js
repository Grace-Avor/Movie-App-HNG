import { Link } from "react-router-dom";
import apple from "../assets/apple.png";
import IMDB from "../assets/IMDB.png";

const Reuseable = ({ movieList }) => {
  console.log(movieList);

  return (
    <div className="movieSession">
      {movieList.map((movie) => (
        <div className="mainMovieSession" key={movie.id}>
          <div className="image">
            <Link to={`/movies/monami/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
                className="posters"
              />
            </Link>
          </div>
          <div className="contents">
            <p>
              <span>{movie.release_date}</span>
            </p>
          </div>
          <h6> {movie.title} </h6>
          <div className="popularity">
            <div>
              <img src={apple} alt="thumbnail" />
              <span> {movie.popularity} </span>
            </div>
            <div>
              <img src={IMDB} alt="thumbnail" />
              <span> {movie.popularity} </span>
            </div>
          </div>
          <p> {movie.vote_count} </p>
        </div>
      ))}
    </div>
  );
};

export default Reuseable;
