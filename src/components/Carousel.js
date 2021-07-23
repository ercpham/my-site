import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Carousel.css";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerStyle, setContainerStyle] = useState({});
  const [ongoingTransition, setOngoingTransition] = useState(false);
  const transitionTime = 800;
  const numSlides = 3;
  const slideWidth = 70;

  /**
   * Goes to the specified slide, turning off transitions after change is made
   * @param slideNumber Slide number to go to
   */
  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
    setOngoingTransition(true);
    setContainerStyle({
      transform: `translateX(${-slideNumber * slideWidth}vw)`,
      transition: `${transitionTime / 1000}s`,
    });
    setTimeout(() => {
      setOngoingTransition(false);
      setContainerStyle({
        transform: `translateX(${-slideNumber * slideWidth}vw)`,
      });
    }, transitionTime);
  };

  return (
    <div className="carousel-wrap">
      <FaChevronLeft
        className={`slide-btn ${
          ongoingTransition ? "pointerOff" : "pointerOn"
        } ${currentSlide === 0 && "btn-off"}`}
        onClick={() => {
          currentSlide > 0 && goToSlide(currentSlide - 1);
        }}
      />
      <div className="carousel">
        <div className="slide-wrap">
          <div className="slideContainer" style={containerStyle}>
            <div className={`slide slide1`}>
              <h6>
                I'm currently a student at UC San Diego studying Computer
                Science
              </h6>
            </div>
            <div className={`slide slide2`}>
              <h6>Some of my hobbies include playing guitar and writing songs</h6>
            </div>
            <div className={`slide slide3`}>
              <h6>Some of my recent reads</h6>
            </div>
          </div>
        </div>
      </div>
      <FaChevronRight
        className={`slide-btn ${
          ongoingTransition ? "pointerOff" : "pointerOn"
        } ${currentSlide === numSlides-1 && "btn-off"}`}
        onClick={() => {
          currentSlide < numSlides-1 && goToSlide(currentSlide + 1);
        }}
      />
    </div>
  );
}

export default Carousel;
