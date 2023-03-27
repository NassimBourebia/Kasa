import { useState } from "react";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;
  const total = length;
  const currentImage = current + 1;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      { (pictures.length === 1) ? <img src={ pictures[0] } alt="" /> :
      <>
        <i className="arrow left" onClick={prevSlide}></i>
        <i className="arrow right" onClick={nextSlide}></i>
        { pictures.map((slide, index) => (
          <div className={index === current ? "carousel active" : ""} key={index}>
            {index === current && <img src={slide} alt="" />}
            <p>{currentImage}/{total}</p>
          </div>
        ))}
      </>
      }
    </div>
  );
}

export default Carousel;