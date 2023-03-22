import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

import pawPrintLogo from "../assets/paw.svg";
import NestedMenu from "./NestedMenu";

import { Link } from "react-router-dom";
function TopNav() {
  return (
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
          <Link
            to="/galleries"
            style={{ textDecoration: "none", color: "white" }}
          >
            <img
              src={pawPrintLogo}
              alt="paw-print-logo"
              style={{ width: 53.3, height: 50 }}
            />
          </Link>
        </Typography>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button size="large" endIcon={<HomeIcon />} color="inherit">
            Home
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export default TopNav;
