import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Menu,
  useTheme,
} from "@material-ui/core";
import { ArrowBackIos, MenuRounded } from "@material-ui/icons";
import { useContext, useState } from "react";
import { FileTreeContext } from "../contexts/fileTreeContext";
import GitFileTree from "./GitFileTree";

const Test = () => {
  const { repoDetails, fileContextData } = useContext(FileTreeContext);
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme();

  console.log("test.js", repoDetails, fileContextData);

  return (
    <div className="">
      <Drawer anchor="left" open={isOpen} variant="persistent">
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <ArrowBackIos fontSize="small" />
        </IconButton>
        <Divider />
        <List>
          <GitFileTree fileContextData={fileContextData} />
        </List>
      </Drawer>
      {!isOpen && (
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded />
        </IconButton>
      )}
      <div
        style={{
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: `${isOpen && "240px"}`,
        }}
      >
        <h2>Hello Worlds</h2>
      </div>
    </div>
  );
};

export default Test;
