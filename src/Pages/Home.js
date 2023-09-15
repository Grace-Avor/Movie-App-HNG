import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Movie from "../Components/Movie";
import Details from "../Components/Movie-details";
import Features from "../Components/features";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <Navbar />
        <Details />
        <div>
          <Features />
          <Movie />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
