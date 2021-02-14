import React from "react";
import Test from "./components/Test";
import BranchContextProvider from "./contexts/branchContext";
import RepoContextProvider from "./contexts/repoContext";

function App() {
  return (
    <div className="App">
      {chrome.runtime.sendMessage(
        { action: "GET_EXPLORER_DATA" },
        function (response) {
          console.log(response);
        }
      )}
      {/* <RepoContextProvider>
        <BranchContextProvider>
          <Test />
        </BranchContextProvider>
      </RepoContextProvider> */}
    </div>
  );
}

export default App;
