import React, { useEffect } from "react";

function App() {
  var parser = document.createElement("a");
  parser.href = window.location.href;
  var query = parser.search.substring(1);
  var repoInfo = query.split("/");

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/${repoInfo[repoInfo.length - 2]}/${
        repoInfo[repoInfo.length - 1]
      }/branches/master`
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="App">
      <p>Repo name: {repoInfo[repoInfo.length - 1]}</p>
      <p>Owner: {repoInfo[repoInfo.length - 2]}</p>
    </div>
  );
}

export default App;
