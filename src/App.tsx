import React from "react";
import "./App.css";
import Register from "./Screens/Register/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
