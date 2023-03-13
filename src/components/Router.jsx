import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <h1>Home</h1> } />
      <Route path="/accommodation/:id" element={ <h1>Appartment</h1> } />
      <Route path="/about" element={ <h1>A Propos</h1> } />
      <Route path="*" element={ <h1>Not found</h1> } />
    </Routes>
  );
}

export default Router;