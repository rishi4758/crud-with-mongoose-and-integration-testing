import React from "react";

import Main from "./components/main";

import "./App.css";

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <Main data-test="MainRender" />
    </div>
  );
}

export default App;
