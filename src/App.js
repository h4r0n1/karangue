import "./Components/Home.css";
import Accueil from "./Components/Accueil";
import Login from "./Components/Account/Login";
import Sante from "./Components/Contents/Sante";
import Remboursement from "./Components/Remboursement/Remboursement";
import Carte from "./Components/Carte/Carte";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import "./App.css";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/remboursement" component={Remboursement} />
            <Route exact path="/footer" component={Footer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sante" component={Sante} />
            <Route exact path="/qrcard" component={Carte} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
