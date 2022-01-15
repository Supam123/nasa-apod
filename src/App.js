import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route component={NasaPhoto} path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
