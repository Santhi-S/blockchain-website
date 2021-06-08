import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import EAuctionPage from "./Pages/EAuctionPage";
import LiveAuctionPage from "./Pages/LiveAuctionPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/e-auctiondetails" exact component={EAuctionPage} />
        <Route path="/liveauction" exact component={LiveAuctionPage} />
      </Switch>
    </Router>
  );
}

export default App;
