import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import FAQs from "./FAQs";
import DrawingPage from "./pages/DrawingPage";
import ProfilePage from "./pages/ProfilePage";
import ContractPage from "./pages/ContractPage";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/marketplace" exact component={Marketplace} />
        <Route path="/faqs" exact component={FAQs} />
        <Route path="/drawing" exact component={DrawingPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/contract" exact component={ContractPage} />
      </div>
    </Router>
  );
}

export default App;
