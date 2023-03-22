import React from "react";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import { Menu } from "@mui/material";
import { NestedMenuItem } from "mui-nested-menu";

// import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { IconMenuItem } from "mui-nested-menu";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

import { profileData } from "../galleryData/profileData";
function NestedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget as Element);
  }

  const handleClose = () => setAnchorEl(null);
  return (
    <div>
      {/* ts forcing href tag on button*/}
      {/* @ts-ignore */}
      <Button
        size="large"
        onClick={handleClick}
        endIcon={<MenuIcon />}
        color="inherit"
      >
        Menu
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <IconMenuItem
            onClick={handleClose}
            leftIcon={<HomeIcon />}
            label={"Home"}
          />
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          <IconMenuItem
            onClick={handleClose}
            leftIcon={<InfoIcon />}
            label={"About"}
          />
        </Link>
        <NestedMenuItem
          leftIcon={<PhotoLibraryIcon />}
          label={"Galleries"}
          parentMenuOpen={open}
        >
          {profileData.map((dog, index) => {
            const relativeLinkUrl = `/gallery/${dog.title}`;
            return (
              <Link
                to={relativeLinkUrl}
                style={{ textDecoration: "none", color: "white" }}
                key={dog.title + index}
              >
                <IconMenuItem
                  onClick={handleClose}
                  leftIcon={<PetsIcon />}
                  label={dog.title}
                />
              </Link>
            );
          })}
        </NestedMenuItem>
      </Menu>
    </div>
  );
}
export default NestedMenu;
