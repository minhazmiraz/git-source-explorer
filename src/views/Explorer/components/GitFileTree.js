import { useState } from "react";
import FileTree from "react-file-treeview";
const GitFileTree = ({ fileContextData }) => {
  let treeData =
    fileContextData && fileContextData.tree ? fileContextData.tree : [];

  console.log("treeData: ", treeData);

  const data = {
    name: "",
    id: 1,
    toggled: true,
    child: treeData,
  };

  //create Collapse button data
  const [collapseAll, setCollapseAll] = useState(false);
  const handleCollapseAll = (value) => setCollapseAll(value);

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
      {fileContextData && (
        <div>
          <FileTree
            data={data}
            action={action}
            decorator={treeDecorator}
            collapseAll={{ collapseAll, handleCollapseAll }}
          />
        </div>
      )}
    </div>
  );
};

export default GitFileTree;
