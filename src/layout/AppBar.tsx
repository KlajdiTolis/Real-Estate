import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import { useNavigate, Outlet, Link } from "react-router-dom";

//import logo
import UserLogo from "../assets/homeImage/user.png"

const pages = [{
  id: 0,
  name: "Buy",
  to: "/buy"
},
{
  id: 1,
  name: "Sell",
  to: "/sell"
}
  ,
{
  id: 2,
  name: "Rent",
  to: "/rent"
}];
const settings = [{
  id: 0,
  name: "Profil",
  to: "/profil"
},
{
  id: 1,
  name: "Account",
  to: "/account"
}
  ,
{
  id: 2,
  name: "Logout",
  to: "/logout"
}];;

const ApppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>();

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
       backgroundImage: "linear-gradient(to right, #87a194 , #988da8)"
        // bgcolor: "#988da8"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Layout /></Typography>
                </MenuItem> */}
            </Menu>
          </Box>
          {/* <img src={BGremoveLogo} alt="sdasd" width={60} height={60} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 5,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Real Estate
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              textAlign: "center",
            }}
          >
            {pages.map((page) => (
              <Box>
                <Link to={page.to}
                  key={page.id}
                  style={{ textDecoration: "none", color: "white", fontSize: 20, fontWeight: "bold", fontFamily: "monospace", textShadow: "2px 2px #000000", paddingInline: 37 }}>
                  {page.name}
                </Link>
              </Box>
            ))}
            {/* <Layout /> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.7, border: 1, borderColor: "white" }}>
                <img src={UserLogo} width={33} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default ApppBar;
