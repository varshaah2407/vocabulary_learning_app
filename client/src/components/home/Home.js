import React from "react";
import "./Home.css";
import quoteImage from "../images/homepage2.png";
function Home() {
  return (
    // <div>
    //   <img src={quoteImage} alt="Quote Vocab" className="quoteImage" />
    // </div>
    <div>
      <div className="image-container">
        <img src={quoteImage} alt="Vocab Quote" className="background-image" />
        <button className="overlay-button">Start Learning</button>
      </div>
      {/* <div className="image-container">
        <img src={quoteImage} alt="Vocab Quote" className="background-image" />
        <button className="overlay-button">Start Learning</button>
      </div> */}
    </div>
  );
}
export default Home;
//#DBF2F4
//#00E5F4
