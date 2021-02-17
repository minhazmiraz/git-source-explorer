import { createContext, useEffect, useState } from "react";
import GetUrlQuery from "../common/getUrlQuery";
import { getFileTreeEndpoint } from "../common/getEndpoints";
import { useFetch } from "../common/useFetch";
import { getDataFromStorage, setDataInStorage } from "../common/storageUtils";

export const FileTreeContext = createContext();

const FileTreeContextProvider = (props) => {
  const repoDetails = GetUrlQuery();
  const storageKey =
    repoDetails.name +
    repoDetails.author +
    repoDetails.branch +
    repoDetails.sha;

  const [fileContextData, setFileContextData] = useState(null);

  console.log(repoDetails);

  useEffect(() => {
    const abortCtrl = new AbortController();
    getDataFromStorage(storageKey).then((res) => {
      if (!res) {
        useFetch(getFileTreeEndpoint(repoDetails), abortCtrl).then((res) =>
          setFileContextData(res)
        );
      } else {
        setFileContextData(res);
      }
    });

    return () => abortCtrl.abort();
  }, []);

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
