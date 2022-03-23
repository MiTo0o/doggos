import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

import pawPrintLogo from "../../assets/logos/paw-print.svg";
import NestedMenu from "../NestedMenu/NestedMenu";

function TopNav() {
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NestedMenu />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <img src={pawPrintLogo} className="App-logo" alt="paw-print-logo" />
          </Typography>
          <Button size="large" endIcon={<HomeIcon />} color="inherit">
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default TopNav;
