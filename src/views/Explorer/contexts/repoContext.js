import { createContext } from "react";
import GetUrlQuery from "../common/getUrlQuery";
import { getRepoEndpoint } from "../common/getEndpoints";
import UseFetch from "../common/useFetch";

export const RepoContext = createContext();

const RepoContextProvider = (props) => {
  const { repoName, repoAuthor } = GetUrlQuery();
  const { repoDetails, isPending, error } = UseFetch(
    getRepoEndpoint(repoName, repoAuthor)
  );
  return (
    <RepoContext.Provider value={{ ...repoDetails, isPending, error }}>
      {props.children}
    </RepoContext.Provider>
  );
};

export default RepoContextProvider;
