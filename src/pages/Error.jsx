import { Link } from "react-router-dom";
import Main from "../components/Main";

function Error() {
  return (
    <Main className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </Main>
  );
}

export default Error;