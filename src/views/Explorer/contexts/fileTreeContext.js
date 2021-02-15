import { createContext } from "react";
import GetUrlQuery from "../common/getUrlQuery";
import { getFileTreeEndpoint } from "../common/getEndpoints";
import UseFetch from "../common/useFetch";

export const FileTreeContext = createContext();

const FileTreeContextProvider = (props) => {
  const urlQuery = GetUrlQuery();

  chrome.storage.local.get([urlQuery.sha], (result) => {
    //TODO
    console.log("Value currently is " + result.key);
  });

  chrome.storage.local.set({ key: value }, function () {
    console.log("Value is set to " + value);
  });
  const { fileTree, isPending, error } = UseFetch(
    getFileTreeEndpoint(urlQuery)
  );
  return (
    <FileTreeContext.Provider
      value={{ ...urlQuery, ...fileTree, isPending, error }}
    >
      {props.children}
    </FileTreeContext.Provider>
  );
};

export default FileTreeContextProvider;
