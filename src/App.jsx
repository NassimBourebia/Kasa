import Router from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router />
      <Footer/>
    </div>
  );
}

export default App;
