import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      className={classes.root}
      style={{ width: "100vw", marginLeft: "90px" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}

/* <div
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
      </div> */
