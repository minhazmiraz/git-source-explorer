import React from "react";
import SourceExplorer from "./components/sourceExplorer";
import GitRepoContextProvider from "./contexts/GitRepoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ExplorerContextProvider from "./contexts/ExplorerContext";

function App() {
  return (
    <div className="App">
      <ExplorerContextProvider>
        <GitRepoContextProvider>
          <SourceExplorer />
        </GitRepoContextProvider>
      </ExplorerContextProvider>
    </div>
  );
}

export default App;
