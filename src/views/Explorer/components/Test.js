import { useContext } from "react";
import { BranchContext } from "../contexts/branchContext";
import { FileTreeContext } from "../contexts/fileTreeContext";
import { RepoContext } from "../contexts/repoContext";

const Test = () => {
  const { repoDetails, fileTree, fileTreePending, fileTreeError } = useContext(
    FileTreeContext
  );

  return (
    <div className="">
      {repoDetails &
      (
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
