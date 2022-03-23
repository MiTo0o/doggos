import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import pawPrintLogo from '../../assets/logos/paw-print.svg';



function TopNav() {


  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ mr: 5 }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <img src={pawPrintLogo} className="App-logo" alt="paw-print-logo" />
          </Typography>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default TopNav;
