// import {useState} from "react"; 

function Carousel({pictures}) {
  
  return (
    <div className="carousel">
      <img
        src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg"
        alt=""
      />
      <img
        src=" https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
        alt=""
      />
      <i className="arrow left"></i>
      <i className="arrow right"></i>
      <p>1/4</p>
   
    </div>
  );
}

export default Carousel;
