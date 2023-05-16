import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Grid, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Tooltip, MenuItem, Stack } from "@mui/material";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { logout } from "../firebase/Firebase";

//import logo
import UserLogo from "../assets/homeImage/user.png";
import RealEstateLogo from "../assets/logoNoBg.png";
import UserSettings from "../assets/homeImage/setting.png";

const pages = [
  {
    id: 0,
    name: "Home",
    to: "/",
  },
  {
    id: 1,
    name: "Buy",
    to: "/buy",
  },
  {
    id: 2,
    name: "Sell",
    to: "/sell",
  },
  {
    id: 4,
    name: "Rent",
    to: "/rent",
  },
];

const supportPage = [
  {
    id: 0,
    name: "Loan",
    to: "/loan",
  },
  {
    id: 1,
    name: "Contact",
    to: "/contact",
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

  const LogoutButton = async () => {
    await logout();
    await navigate("/login");
  };

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

  const moreThan1300 = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* phone menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="success"
              sx={{ color: "black" }}
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
              color: "black",
              textDecoration: "none",
            }}
          >
            Real Estate
          </Typography>
          {/* screen size */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Box>
                <Link
                  to={page.to}
                  key={page.id}
                  style={{
                    textDecoration: "none",
                    color: "Black",
                    fontSize: bigScreen ? 20 : 15,
                    fontWeight: "bold",
                    paddingInline: 30,
                  }}
                >
                  {page.name}
                </Link>
              </Box>
            ))}
          </Box>
          {moreThan1300 ? (
            <img
              style={{ marginRight: "26%" }}
              src={RealEstateLogo}
              width={100}
            />
          ) : (
            ""
          )}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Stack direction="row">
              {supportPage.map((page) => (
                <Box>
                  <Link
                    to={page.to}
                    key={page.id}
                    style={{
                      textDecoration: "none",
                      color: "Black",
                      fontSize: bigScreen ? 20 : 15,
                      fontWeight: "bold",
                      paddingInline: 30,
                    }}
                  >
                    {page.name}
                  </Link>
                </Box>
              ))}
            </Stack>
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
              {/* {settings.map((setting) => (
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
              ))} */}
              <Button onClick={LogoutButton}>Logout</Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ApppBar;
