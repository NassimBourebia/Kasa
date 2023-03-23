function Tags({ data }) {
  return (
    <ul className="tags-container">
      {data.map((tag, index) => (
        <li className="tags" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
