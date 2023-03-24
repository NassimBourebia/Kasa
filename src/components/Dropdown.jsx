import { useState } from "react";

function Dropdown({ title, description }) {
  const [activeItemIndex, setActiveItemIndex] = useState(false);

  return (
    <div className="dropdown">
      <h2
        className={activeItemIndex ? "expand" : "collapse"}
        onClick={() => setActiveItemIndex(!activeItemIndex)}
      >
        {title}
        <i className="up"></i>
      </h2>{
      Array.isArray(description)
        ? <ul>{ description.map((item, index) => <li key={index}>{item}</li>) }</ul>
        :<p>{description}</p>
        }
    </div>
  );
}


export default Dropdown;
