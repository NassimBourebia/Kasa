import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accommodation/:id" element={<h1>Appartment</h1>} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default Router;
