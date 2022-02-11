import { AppBar, IconButton, Toolbar, Box } from "@material-ui/core";
import React from "react";
import "./SecondNavigationBar.css";

const SecondNavigationBar = () => {
  const logo = require("../../assets/images/logo/pngegg.png");
  return (
    <div>
      <AppBar>
        <Toolbar style={{ justifyContent: "center" }}>
          <IconButton>
            {" "}
            <Box component="img" sx={{ width: "60px" }} src={logo} alt=""></Box>
          </IconButton>
          <h3>Your Favorite Burgers...</h3>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SecondNavigationBar;
