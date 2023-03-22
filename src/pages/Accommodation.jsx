import Information from "../components/information";
import Main from "../components/Main";
import data from "../__mocks__/logements.json";

function Accommodation() {
  return (
    <Main className="Accommodation">
      <Information data={data} />
    </Main>
  );
}

export default Accommodation;
