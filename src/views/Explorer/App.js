import React from "react";
import Test from "./components/Test";
import BranchContextProvider from "./contexts/branchContext";
import RepoContextProvider from "./contexts/repoContext";

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
