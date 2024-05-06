import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/employees"}>Employees</Link>
    </div>
  );
};

export default Navbar;
