import './App.css';
import click from "./Component/click"
import mouse from "./Component/mouse"
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={click} />
        <Route path="/mouse" component={mouse} />
       
      
      </Switch>
    </HashRouter>
  </Router>
    
  );
}

export default App;