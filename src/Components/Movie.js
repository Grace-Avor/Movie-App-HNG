import React, { useEffect, useState } from "react";
import Reuseable from "./ReuseableMovie";

function Movie() {
  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovie = () => {
    setTimeout(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=34364dc88e8dce9f4c84e3b56fe07db4"
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setMovieList(data.results.slice(0, 12));
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
  console.log(movieList);
  return (
    <div className="Moviecontainer">
      {error && <div> {error} </div>}
      {isLoading && <div> Loading....... </div>}
      <Reuseable movieList={movieList} />
    </div>
  );
}

export default Movie;
