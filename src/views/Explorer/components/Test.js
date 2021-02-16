import { useContext } from "react";
import { FileTreeContext } from "../contexts/fileTreeContext";

const Test = () => {
  const {
    urlQuery: repoDetails,
    fileTree,
    fileContextPending,
    fileContextError,
  } = useContext(FileTreeContext);

  console.log("test.js", repoDetails);

  return (
    <div className="">
      {repoDetails && (
        <div>
          <p>
            Repository Name: <b>{repoDetails.name}</b>
          </p>
          <p>
            Created By: <b>{repoDetails.author}</b>
          </p>
          <p>
            Branch: <b>{repoDetails.branch}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Test;
