import React from "react";
import Test from "./components/Test";
import FileTreeContextProvider from "./contexts/fileTreeContext";

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
