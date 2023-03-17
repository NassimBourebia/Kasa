import { Link } from "react-router-dom";

function Card(props) {
  const { data } = props;
  return (
    <li>
      <figure className="card">
        <Link to={`/accommodation/${data.id}`}>
          <img src={data.cover} alt={data.title} />
          <figcaption>{data.title}</figcaption>
        </Link>
      </figure>
    </li>
  );
}

export default Card;
