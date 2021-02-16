import { createContext } from "react";
import GetUrlQuery from "../common/getUrlQuery";
import { getFileTreeEndpoint } from "../common/getEndpoints";
import UseFetch from "../common/useFetch";

export const FileTreeContext = createContext();

const FileTreeContextProvider = (props) => {
  const urlQuery = GetUrlQuery();
  console.log(urlQuery);

  const {
    data: fileTree,
    isPending: fileContextPending,
    error: fileContextError,
  } = UseFetch(getFileTreeEndpoint(urlQuery));

  console.log("fileTreeContext: ", {
    fileTree,
    fileContextPending,
    fileContextError,
  });

  /*   
  chrome.storage.local.get(
    [urlQuery.name + urlQuery.author + urlQuery.branch + urlQuery.sha],
    (result) => {
      if (chrome.runtime.lastError) {
        const { fileTree, isPending, error } = UseFetch(
          getFileTreeEndpoint(urlQuery)
        );

        chrome.storage.local.set({ key: value }, function () {
          console.log("Value is set to " + value);
        });
        return;
      }
      //TODO
      console.log("Value currently is " + result.key);
    }
  );
 */

  return (
    <FileTreeContext.Provider
      value={{ urlQuery, fileTree, fileContextPending, fileContextError }}
    >
      {props.children}
    </FileTreeContext.Provider>
  );
};

export default FileTreeContextProvider;
