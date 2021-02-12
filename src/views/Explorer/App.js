import React, { useEffect, useState } from "react";

function App() {
  var parser = document.createElement("a");
  parser.href = window.location.href;
  var query = parser.search.substring(1);
  var repoInfo = query.split("/");

  const [repoDetails, setRepoDetails] = useState("");
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/octocat/Spoon-Knife")
      .then((response) => response.json())
      .then((response) => {
        console.log("repo: ", response);
        setRepoDetails({
          ...repoDetails,
          ...response,
        });
      });
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/octocat/Spoon-Knife/branches")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBranches([...branches, ...response]);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Repository Name:{" "}
        <b>{repoDetails ? repoDetails.name : "Loading....."}</b>
      </p>
      <p>
        Created By:{" "}
        <b>{repoDetails ? repoDetails.owner.login : "Loading...."}</b>
      </p>
      <select name="branch_name">
        {!repoDetails && <option>Select a branch</option>}
        {repoDetails &&
          branches &&
          branches.map((branch) =>
            branch.name === repoDetails.default_name ? (
              console.log("Found")
            ) : (
              <option key={branch.commit.sha} value={branch.name}>
                {branch.name}
              </option>
            )
          )}
      </select>
    </div>
  );
}

export default App;
