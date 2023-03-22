import { useState } from "react";

function Dropdown({ data }) {
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const showContent = (index) => {
    setActiveItemIndex(index === activeItemIndex ? null : index);
  };

  return (
    <div className="boxdescription">
      {data.map((item, index) => (
        <div className="dropdown" key={item.id}>
          <h2
            className={`collapse expand ${index === activeItemIndex ? "active" : ""}`}
            onClick={() => showContent(index)}
          >
            {item.title}
            <i className="up"></i>
          </h2>
          {index === activeItemIndex && <p>{item.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;