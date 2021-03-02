import React from "react";
import Test from "./components/Test";
import FileTreeContextProvider from "./contexts/fileTreeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <FileTreeContextProvider>
        <Test />
      </FileTreeContextProvider>
    </div>
  );
}

export default App;
