import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React App (Client Side)
        </Typography>
        <Button color="inherit">
          <Link to={"/"}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/contact"}>Contact</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/categories"}>Categories</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
