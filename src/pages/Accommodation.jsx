import Information from "../components/Information";
import Main from "../components/Main";
import data from "../__mocks__/logements.json";
import { useParams } from "react-router-dom";

function Accommodation() {
    const params  = useParams();
    const logement = data.find((item) => item.id === params.id); 

  return (
    <Main className="Accommodation">
      <Information data={logement} />
    </Main>
  );
}

export default Accommodation;
