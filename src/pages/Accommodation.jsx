import { useEffect, useState } from "react";
import Information from "../components/Information";
import Main from "../components/Main";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";

function Accommodation() {
  const params = useParams();
  const [ logement, setLogement ] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/data/logements.json');
        if (!response.ok) throw new Error((await response.json()).message);
        const data = await response.json();
        
        const logement = data.find(item => item.id === params.id);
        setLogement(logement);
      } catch(error) {
        console.error(error);
      }
    })();
  }, [ params ]);

  return logement && (
    <Main className="Accommodation">
      <Carousel pictures={logement.pictures} />
      <Information data={logement} />
      <div className="dropdowncontainer">
        <Dropdown title="Description" description={logement.description} />
        <Dropdown title="Equipement" description={logement.equipments} />
      </div>
    </Main>
  );
}

export default Accommodation;