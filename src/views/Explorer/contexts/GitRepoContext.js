import { createContext, useEffect, useState } from "react";
import GetUrlQuery from "../common/getUrlQuery";
import { getFileTreeEndpoint } from "../common/getEndpoints";
import { getFetch } from "../common/getFetch";
//import { getDataFromStorage, setDataInStorage } from "../common/storageUtils";
import { parseJsonToTree } from "../common/parseTree";

export const GitRepoContext = createContext();

const GitRepoContextProvider = (props) => {
  const repoDetails = GetUrlQuery();
  const storageKey = repoDetails.author + repoDetails.name + repoDetails.branch;

  const [gitRepoContextData, setGitRepoContextData] = useState(null);

  console.log(repoDetails);

  useEffect(() => {
    const abortCtrl = new AbortController();
    getFetch(getFileTreeEndpoint(repoDetails), abortCtrl).then(
      (fetchResponse) => {
        let storageData = {
          ...fetchResponse.data,
          tree: parseJsonToTree(fetchResponse.data.tree),
        };
        setGitRepoContextData(storageData);
      }
    );
    return () => abortCtrl.abort();
  }, []);

  /* useEffect(() => {
    const abortCtrl = new AbortController();
    getDataFromStorage().then((storageResponse) => {
      if (!storageResponse || !storageResponse[storageKey]) {
        getFetch(getFileTreeEndpoint(repoDetails), abortCtrl).then(
          (fetchResponse) => {
            let storageData = {
              ...fetchResponse.data,
              tree: parseJsonToTree(fetchResponse.data.tree),
            };
            storageResponse = {
              ...storageResponse,
              [storageKey]: storageData,
            };
            if (!fetchResponse.isPending) setDataInStorage(storageResponse);
            setGitRepoContextData(storageResponse[storageKey]);
          }
        );
      } else {
        console.log("Data found in storage");
        setGitRepoContextData(storageResponse[storageKey]);
      }
    });

    return () => abortCtrl.abort();
  }, []); */

  return (
    <GitRepoContext.Provider
      value={{
        repoDetails,
        gitRepoData: gitRepoContextData,
      }}
    >
      {props.children}
    </GitRepoContext.Provider>
  );
};

export default GitRepoContextProvider;
