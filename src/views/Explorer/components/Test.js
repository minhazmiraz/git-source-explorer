import { useContext } from "react";
import { BranchContext } from "../contexts/branchContext";
import { RepoContext } from "../contexts/repoContext";

const Test = () => {
  const { repoDetails, repoPending, repoError } = useContext(RepoContext);
  const { branches, branchPending, branchError } = useContext(BranchContext);

  return (
    <div className="">
      {!repoPending &&
        repoError === null &&
        !branchPending &&
        branchError === null && (
          <div>
            <p>
              Repository Name: <b>{repoDetails.name}</b>
            </p>
            <p>
              Created By: <b>{repoDetails.owner.login}</b>
            </p>
            <select name="branch_name">
              {branches.map((branch) => (
                <option key={branch.commit.sha} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
        )}
      {console.log(repoPending)}
      {repoError !== null && repoError}
      {branchError !== null && branchError}
    </div>
  );
};

export default Test;
