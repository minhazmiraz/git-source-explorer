import { useContext } from "react";
import { FileTreeContext } from "../contexts/fileTreeContext";
import GitFileTree from "./GitFileTree";
import Navbar from "./Navbar";

const Test = () => {
  const { repoDetails, fileContextData } = useContext(FileTreeContext);

  console.log("test.js", repoDetails, fileContextData);

  return (
    <div className="">
      <Navbar repoDetails={repoDetails} />
      <div className="container-fluid">
        <div className="row w-100">
          <div class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <GitFileTree fileContextData={fileContextData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
