import { Divider, Drawer, IconButton, List, useTheme } from "@material-ui/core";
import { ArrowBackIos, MenuRounded } from "@material-ui/icons";
import { useContext, useState } from "react";
import { GitRepoContext } from "../contexts/gitRepoContext";
import SimpleTabs from "./Editors";
import GitFileTree from "./GitFileTree";

const Test = () => {
  const { repoDetails, gitRepoContextData } = useContext(GitRepoContext);
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme();

  console.log("test.js", repoDetails, gitRepoContextData);

  return (
    <div className="">
      <Drawer anchor="left" open={isOpen} variant="persistent">
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <ArrowBackIos fontSize="small" />
        </IconButton>
        <Divider />
        <List>
          <GitFileTree gitRepoContextData={gitRepoContextData} />
        </List>
      </Drawer>
      <div
        style={{
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: `${isOpen ? "240px" : "0px"}`,
        }}
      >
        <div>
          <span style={{ display: "inline-block" }}>
            {!isOpen && (
              <IconButton onClick={() => setIsOpen(!isOpen)}>
                <MenuRounded />
              </IconButton>
            )}
          </span>
          <span style={{ display: "inline-block" }}>
            <SimpleTabs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Test;
