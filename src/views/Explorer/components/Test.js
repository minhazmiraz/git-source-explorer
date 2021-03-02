import { useContext } from "react";
import { FileTreeContext } from "../contexts/fileTreeContext";
import FileTreeView from "react-file-treeview";

const Test = () => {
  const { repoDetails, fileContextData } = useContext(FileTreeContext);

  console.log("test.js", repoDetails, fileContextData);

  let treeData =
    fileContextData && fileContextData.tree ? fileContextData.tree : [];
  console.log("treeData: ", treeData);

  const data = {
    name: repoDetails.name,
    id: 1,
    toggled: true,
    child: treeData,
  };

  //Create action data*
  const handleFileOnClick = (file) => {
    console.log(file);
  };

  const action = {
    fileOnClick: handleFileOnClick,
  };

  //Create Decoration data*
  const treeDecorator = {
    showIcon: true,
    iconSize: 18,
    textSize: 15,
    showCollapseAll: true,
  };

  return (
    <div className="">
      {repoDetails && (
        <div>
          <p>
            Repository Name: <b>{repoDetails.name}</b>
          </p>
          <p>
            Created By: <b>{repoDetails.author}</b>
          </p>
          <p>
            Branch: <b>{repoDetails.branch}</b>
          </p>
        </div>
      )}
      {fileContextData && (
        <div className="container-fluid">
          <div className="float-left" style={{ width: "300px" }}>
            <FileTreeView
              data={data}
              action={action}
              decorator={treeDecorator}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
