import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Stack } from "@mui/material";

//import logo
import UserLogo from "../assets/homeImage/user.png";
import RealEstateLogo from "../assets/buildings-removebg-preview.png";
import UserSettings from "../assets/homeImage/setting.png";

const pages = [
  {
    id: 0,
    name: "Buy",
    to: "/buy",
  },
  {
    id: 1,
    name: "Sell",
    to: "/sell",
  },
  {
    id: 2,
    name: "Rent",
    to: "/rent",
  },
];
const settings = [
  // {
  //   id: 0,
  //   name: "Profil",
  //   to: "/profil"
  // },
  // {
  //   id: 1,
  //   name: "Account",
  //   to: "/account"
  // }
  //   ,
  {
    id: 2,
    name: "Logout",
    to: "/login",
  },
];

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

  const phone = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const bigScreen = useMediaQuery({
    query: "(min-width: 1500px)",
  });

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundImage: "linear-gradient(to right, #87a194 , #988da8)",
        height: 58,
        // borderBottomLeftRadius: "50% 20%",
        // borderBottomRightRadius: "50% 20%",
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Stack direction="column">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "monospace",
                      fontSize: 16,
                    }}
                  >
                    Home
                  </Link>
                  {pages.map((page) => (
                    <Box>
                      <Link
                        to={page.to}
                        key={page.id}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontFamily: "monospace",
                          fontSize: 16,
                        }}
                      >
                        {page.name}
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
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
            {/* <img src={RealEstateLogo} width={90} /> */}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              // textAlign: "center",
              justifyContent: "left",
            }}
          >
            <Link
              to="/"
              style={{
                marginLeft: 35,
                paddingRight: 24,
                color: "white",
                fontSize: bigScreen ? 20 : 18,
                fontWeight: "bold",
                fontFamily: "monospace",
                display: "flex",
                textDecoration: "none",
                textShadow: "2px 2px #000000",
              }}
            >
              Home
            </Link>

            {pages.map((page) => (
              <Box>
                <Link
                  to={page.to}
                  key={page.id}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: bigScreen ? 20 : 18,
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    textShadow: "2px 2px #000000",
                    paddingInline: 37,
                  }}
                >
                  {page.name}
                </Link>
              </Box>
            ))}
            <Link
              to="/loan"
              style={{
                paddingLeft: 24,
                color: "white",
                fontSize: bigScreen ? 20 : 18,
                fontWeight: "bold",
                fontFamily: "monospace",
                display: "flex",
                textDecoration: "none",
                textShadow: "2px 2px #000000",
              }}
            >
              Loans
            </Link>
            {/* <Layout /> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0.7, border: 0.5, borderColor: "#4b6e49" }}
              >
                <img src={UserSettings} width={33} />
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
                  <Box>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "monospace",
                        fontSize: 16,
                      }}
                      href="/login"
                    >
                      {setting.name}
                    </a>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ApppBar;
