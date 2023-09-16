import IMDb from "../assets/IMDB.png";
import apple from "../assets/apple.png";
import Button from "../assets/Button.png";
const Details = () => {
  return (
    <div className="DetailsContainer">
      <h1>
        John Wick 3: <br /> Parabellum
      </h1>
      <div className="DetailList">
        <div className="IMDb-image">
          {" "}
          <img src={IMDb} alt="IMDb" className="IMDb-image" />
        </div>
        <div>86.0/100</div>
        <div className="apple-image">
          {" "}
          <img src={apple} alt="apple" className="Rating" />
        </div>
        <div className="Percent">97%</div>
      </div>
      <p>
        John Wick is on the run after killing a member <br />
        of the international assassins' guild, and with <br />a $14million price
        tag on his head, he is the <br />
        target of the hit men and women everywhere.
      </p>
      <div className="watchlater">
        <img src={Button} alt="button" />
      </div>
    </div>
  );
};

export default Details;
