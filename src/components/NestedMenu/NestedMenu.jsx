import React from "react";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import { NestedMenuItem } from "mui-nested-menu";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { IconMenuItem } from "mui-nested-menu";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
function NestedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <div>
      <Button
        size="large"
        onClick={handleClick}
        endIcon={<MenuIcon />}
        color="inherit"
      >
        Menu
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <IconMenuItem
          onClick={handleClose}
          leftIcon={<HomeIcon />}
          label={"Home"}
        />
        <NestedMenuItem
          leftIcon={<PhotoLibraryIcon />}
          label={"Galleries"}
          parentMenuOpen={open}
        >
          <Link
            to="/gallery/Leo"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconMenuItem
              onClick={handleClose}
              leftIcon={<PetsIcon />}
              label={"Leo"}
            />
          </Link>
          <IconMenuItem
            onClick={handleClose}
            leftIcon={<PetsIcon />}
            label={"Lucky"}
          />
          <IconMenuItem
            onClick={handleClose}
            leftIcon={<PetsIcon />}
            label={"Brownie"}
          />
        </NestedMenuItem>
      </Menu>
    </div>
  );
}
export default NestedMenu;
