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
        <FileTree data={data} action={action} decorator={treeDecorator} />
      )}
    </div>
  );
};

export default GitFileTree;
