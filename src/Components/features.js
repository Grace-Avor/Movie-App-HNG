import Seemore from '../assets/Seemore.png'

const Features = () => {
    return (
      <div className="FeatureContainer">
        <div className="Feature">
          <h2 className="mainfeature"> Feature</h2>
          <p className="SeeMore">
            <img src={Seemore} alt="See-more" />
          </p>
        </div>
      </div>
    );
}
 
export default Features;