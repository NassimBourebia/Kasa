import Information from "../components/Information";
import Main from "../components/Main";
import data from "../__mocks__/logements.json";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";

function Accommodation() {
    const params  = useParams();
    const logement = data.find((item) => item.id === params.id); 

  return (
    <Main className="Accommodation">
      <Carousel/>
      <Information data={logement} />
      <Dropdown title="Description" description={logement.description} />
      <Dropdown title="Equipement" description={logement.equipments}/>
    </Main>
  );
}

export default Accommodation;
