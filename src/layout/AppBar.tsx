import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Grid,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  Stack,
} from "@mui/material";
import { db, auth } from "../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDoc,
  query,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  orderBy,
  startAfter,
  limit,
  where,
} from "firebase/firestore";
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
  {
    id: 0,
    name: "Create Property",
    to: "/property/create",
  },
  {
    id: 1,
    name: "Account",
    to: "/account",
  },
];

const ApppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>();
  const [user, error, isloading] = useAuthState(auth);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const fetchAdminUsers = async () => {
    const dataB = collection(db, "user");
    const q = query(dataB, where("tag", "==", "admin"));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc: any) => setUserEmail(doc.data().email));
  };

  useEffect(() => {
    fetchAdminUsers();
  }, []);

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
            <a style={{ marginRight: "27%" }} href="/">
              <img src={RealEstateLogo} width={100} />
            </a>
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
              {user?.email == userEmail && (
                <>
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
                          href={setting.to}
                        >
                          {setting.name}
                        </a>
                      </Box>
                    </MenuItem>
                  ))}
                </>
              )}
              <Button
                sx={{
                  pl: 2,
                  pr: 2,
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "monospace",
                  fontSize: 16,
                }}
                onClick={LogoutButton}
              >
                Logout
              </Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ApppBar;
