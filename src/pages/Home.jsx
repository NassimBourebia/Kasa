import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Card from "../components/Card";

function Home() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/data/logements.json');
        if (!response.ok) throw new Error((await response.json()).message);

        setData(await response.json());
      } catch(error) {
        console.error(error);
      }
    })();
  }, []);

  return data && (
    <Main className="Home">
      <Banner text="Chez vous, partout et ailleurs" />
      <ul className="cardbox">
        {data.map((item) => <Card key={item.id} data={item} />)}
      </ul>
    </Main>
  );
}

export default Home;