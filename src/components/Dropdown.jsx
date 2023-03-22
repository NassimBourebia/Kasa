import { useState } from "react";

function Dropdown({ data }) {
  const [activeItemIndex, setActiveItemIndex] = useState(false);

  return (
        <div className="dropdown">
          <h2
            className={activeItemIndex ? "expand" : "collapse"}
            onClick={() => setActiveItemIndex(!activeItemIndex)}
          >
            {data.title}
            <i className="up"></i>
          </h2>
          <p>{data.description}</p>
        </div>
  );
}

export default Dropdown;