import { createContext, useReducer } from "react";
import explorerReducer from "../reducers/explorerReducer";

export const ExplorerContext = createContext();

const ExplorerContextProvider = (props) => {
  const [sidebarState, sidebarDispatch] = useReducer(explorerReducer, {
    isOpen: true,
  });
  return (
    <ExplorerContext.Provider
      value={{ sidebarData: sidebarState, setSidebarData: sidebarDispatch }}
    >
      {props.children}
    </ExplorerContext.Provider>
  );
};

export default ExplorerContextProvider;
