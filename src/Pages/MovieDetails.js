import Poster from "../assets/head-image.png";
import BestMovies from "../assets/trio.png";

const MovieDetail = () => {
  return (
    <div className="MainContent">
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
