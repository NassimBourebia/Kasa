import Tags from "./Tags";
import Host from "./Host";
import Rating from "./Rating";

function Information() {
  return (
    <div className="information">
      <div className="apartment-info">
        <h2 className="title">Cozy loft on the Canal Saint-Martin</h2>
        <p className="location">Patris, île-de-France</p>
        <Tags />
      </div>
      <div className="host-container"><Host />
      <Rating /></div>
     
    </div>
  );
}

export default Information;
