import { useState } from "react";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <i className="arrow left" onClick={prevSlide}></i>
      <i className="arrow right" onClick={nextSlide}></i>
      {pictures.map((slide, index) => {
        return (
          <div
            className={index === current ? "carousel active" : ""}
            key={index}
          >
            {index === current && <img src={slide} alt="" />}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
