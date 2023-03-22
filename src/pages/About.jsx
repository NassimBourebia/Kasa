import Banner from "../components/Banner";
import Main from "../components/Main";
import Dropdown from "../components/Dropdown";
import data from "../__mocks__/about.json";



function About() {

 return (
    <Main className="About">
      <Banner/>
      <div className="boxdescription">  
          { data.map((item, index) => <Dropdown key={index} data={ item } />) }
      </div>
    </Main>
  );
}

export default About;