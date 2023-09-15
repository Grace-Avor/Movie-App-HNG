import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'
import youtube from "../assets/yutube.png";
import facebook from "../assets/fa-brands_facebook-square.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="FooterContainer">
        <div>
          <img src={facebook} alt="socials" />
        </div>
        <div>
          <img src={twitter} alt="socials" />
        </div>
        <div>
          <img src={insta} alt="socials" />
        </div>
        <div>
          <img src={youtube} alt="socials" />
        </div>
      </div>
      <div className="policy-copyright">
        <div className="links">
          <div>Conditions of use</div>
          <div>Privacy & Policy</div>
          <div>Press Room</div>
        </div>
        <div className="policy">
          <p>
            <b>©2023 by Avor Grace Monami</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
