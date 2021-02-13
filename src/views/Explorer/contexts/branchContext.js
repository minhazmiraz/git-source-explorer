import { createContext } from "react";
import GetUrlQuery from "../common/getUrlQuery";
import { getBranchesEndpoint } from "../common/getEndpoints";
import UseFetch from "../common/useFetch";

export const BranchContext = createContext();

const BranchContextProvider = (props) => {
  const { repoName, repoAuthor } = GetUrlQuery();
  const { branches, isPending, error } = UseFetch(
    getBranchesEndpoint(repoName, repoAuthor)
  );
  return (
    <BranchContext.Provider value={{ branches, isPending, error }}>
      {props.children}
    </BranchContext.Provider>
  );
};

export default BranchContextProvider;
