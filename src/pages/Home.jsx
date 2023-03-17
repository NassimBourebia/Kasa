import Banner from "../components/Banner";
import Main from "../components/Main";
import Card from "../components/Card";
import data from "../__mocks__/logements.json";

function Home() {
  return (
    <Main className="Home">
      <Banner text="Chez vous, partout et ailleurs" />
      <ul className="cardbox">
        {data.map((item) => <Card key={item.id} data={item} />)}
      </ul>
    </Main>
  );
}

export default Home;
