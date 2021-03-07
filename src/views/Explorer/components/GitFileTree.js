import { useState } from "react";
import FileTree from "react-file-treeview";
const GitFileTree = ({ gitRepoData }) => {
  let treeData = gitRepoData && gitRepoData.tree ? gitRepoData.tree : [];

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
      {gitRepoData && (
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
