import { Divider, Drawer, Fab, IconButton } from "@material-ui/core";
import { ArrowBackIos, MenuRounded } from "@material-ui/icons";
import { useContext } from "react";
import { ExplorerContext } from "../contexts/ExplorerContext";
import { GitRepoContext } from "../contexts/GitRepoContext";
import FileTreeView from "./FileTreeView";
import GitFileTree from "./GitFileTree";

const Sidebar = () => {
  const { sidebarData, setSidebarData } = useContext(ExplorerContext);
  const { repoDetails, gitRepoData } = useContext(GitRepoContext);

  console.log(sidebarData, gitRepoData);

  return (
    <div className="sidebar">
      <Drawer
        anchor="left"
        open={sidebarData.isOpen}
        variant="persistent"
        PaperProps={{
          style: { width: "200px" },
          component: "div",
          variant: "outlined",
        }}
      >
        {/* <div style={{ textAlign: "right" }}>
          <IconButton onClick={() => setSidebarData({ type: "CLOSE_SIDEBAR" })}>
            <ArrowBackIos fontSize="small" />
          </IconButton>
        </div>
        <Divider /> */}
        <div style={{ margin: "5px" }}>
          <FileTreeView repoDetails={repoDetails} gitRepoData={gitRepoData} />
        </div>
      </Drawer>
      {!sidebarData.isOpen && (
        <Fab
          color="primary"
          aria-label="sidebar"
          size="small"
          style={{ marginLeft: "5px", marginTop: "5px" }}
          onClick={() => setSidebarData({ type: "OPEN_SIDEBAR" })}
        >
          <MenuRounded />
        </Fab>
      )}
    </div>
  );
};

export default Sidebar;
