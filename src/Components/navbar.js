import moviebox from '../assets/Logo.png'
import menu from "../assets/Menu.png";

const Navbar = () => {
  return (
    <div className="NavContainer pt-5">
      <div>
        <img src={moviebox} alt="" className="MovieBox" />
      </div>
      <div>
        <input
          type="text"
          placeholder="what do you want to watch?"
          className="input"
        />
      </div>
      <div className="SignIn">
        <img src={menu} alt="search" className="SignIn" />
      </div>
    </div>
  );
};

export default Navbar;
