import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Accommodation from "../pages/Accommodation";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
