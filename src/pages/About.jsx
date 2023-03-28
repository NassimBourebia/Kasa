import Banner from "../components/Banner";
import Main from "../components/Main";
import Dropdown from "../components/Dropdown";
import data from "../data/about.json";

function About() {
  return (
    <Main className="About">
      <Banner />
      <div className="boxdescription">
        {data.map((item, index) => (
          <Dropdown key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </Main>
  );
}

export default About;
