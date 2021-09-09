import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import "./App.css";
import Singlemoviepage from "./components/Singlepage";
import Navbars from "./components/Navbar";
import HomePage from "./components/HomePage";
import Underprogress from "./components/Underprogress";
import Login_reg from "./components/Login_reg";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navbars />
      <Route path="/log" component={Login_reg} />
      <React.Suspense fallback={"Loading..."}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={Singlemoviepage} />
          <Route path="/underprogress" component={Underprogress}/>
        </Switch>
      </React.Suspense>
    </Router>
  );
}
export default App;
