import { createContext, useEffect, useState } from "react";
import GetUrlQuery from "../common/getUrlQuery";
import { getFileTreeEndpoint } from "../common/getEndpoints";
import { getFetch } from "../common/getFetch";
import { getDataFromStorage, setDataInStorage } from "../common/storageUtils";
import { parseJsonToTree } from "../common/parseTree";

export const FileTreeContext = createContext();

const FileTreeContextProvider = (props) => {
  const repoDetails = GetUrlQuery();
  const storageKey = repoDetails.author + repoDetails.name + repoDetails.branch;

  const [fileContextData, setFileContextData] = useState(null);

  console.log(repoDetails);

  useEffect(() => {
    const abortCtrl = new AbortController();
    getFetch(getFileTreeEndpoint(repoDetails), abortCtrl).then(
      (fetchResponse) => {
        let storageData = {
          ...fetchResponse.data,
          tree: parseJsonToTree(fetchResponse.data.tree),
        };
        setFileContextData(storageData);
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
            setFileContextData(storageResponse[storageKey]);
          }
        );
      } else {
        console.log("Data found in storage");
        setFileContextData(storageResponse[storageKey]);
      }
    });

    return () => abortCtrl.abort();
  }, []); */

  return (
    <FileTreeContext.Provider
      value={{
        repoDetails,
        fileContextData,
      }}
    >
      {props.children}
    </FileTreeContext.Provider>
  );
};

export default FileTreeContextProvider;
