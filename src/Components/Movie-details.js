import Button from "../assets/Button.png";
const Details = () => {
  return (
    <div className="DetailsContainer">
      <h1>
        John Wick 3: <br /> Parabellum
      </h1>
      <div className="DetailList">
        <div className="IMDb-image"> IMDb</div>
        <div className="Rating">Rating</div>
        <div className="Percent">percentage</div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        molestiae. <br />
        Iste consectetur perferendis mollitia provident velit vel
      </p>
      <div className="watchlater">
        <img src={Button} alt="button" />
      </div>
    </div>
  );
};

export default Details;
