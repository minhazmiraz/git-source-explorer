import React from "react";
import Test from "./components/Test";
import GitRepoContextProvider from "./contexts/gitRepoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <GitRepoContextProvider>
        <Test />
      </GitRepoContextProvider>
    </div>
  );
}

export default App;
