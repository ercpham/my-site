import "../styles/Landing.css"
import pfp from "../img/pfp.jpg";

function Landing() {
  return (
    <div className="landing">
      <div className="home-text">
        <h3>Welcome!</h3>
        <h5 className="caption">I'm Eric.</h5>
      </div>
      <div className="img-container">
        <span className="triangle1"></span>
        <span className="triangle2"></span>
        <img src={pfp} alt="profile" className="pfp" />
      </div>
    </div>
  );
}

export default Landing;