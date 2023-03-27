import Tags from "./Tags";
import Host from "./Host";
import Rating from "./Rating";

function Information({ data }) {
  return (
    <div className="information">
      <div className="apartment-info">
        <h2 className="title">{data.title}</h2>
        <p className="location">{data.location}</p>
        <Tags data={ data.tags } />
      </div>
      <div className="host-container">
        <Host data={data.host} />
        <Rating data={data}/>
      </div>
    </div>
  );
}

export default Information;
