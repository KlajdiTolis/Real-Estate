import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

//image
import Facebook from "../assets/socialMedia/facebook.png";
import Insta from "../assets/socialMedia/instagram.png";
import Twitter from "../assets/socialMedia/twitter.png";
import Linkedin from "../assets/socialMedia/linkedin.png";
import RealEstateSketch from "../assets/footer/realEstateSketch.png";
import FooterBuidingsRemoveBG from "../assets/footer/footer-removebg1.png";
import LogoNoBg from "../assets/logoNoBg.png";

//logo
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";

const Footer = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 1500px)",
  });

  const minHeight = useMediaQuery({
    query: "(min-height: 700px)",
  });

  return (
    <Box sx={{}}>
      <Grid container>
        <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="row">
            <Box sx={{}}>
              <img src={LogoNoBg} width={130} height={90} />
            </Box>
            <Box sx={{ mt: 5.4, ml: 2, fontWeight: "bold", fontSize: 16 }}>
              Follow US :{" "}
            </Box>
            <Stack direction="row" sx={{ mt: 4.9, ml: 2 }}>
              <Box sx={{ paddingInline: 0.5 }}>
                <img src={Facebook} width={30} height={30} />
              </Box>
              <Box sx={{ paddingInline: 0.5 }}>
                <img src={Insta} width={34} height={34} />
              </Box>
              <Box sx={{ pt: 0.2, paddingInline: 0.5 }}>
                <img src={Twitter} width={30} height={30} />
              </Box>
              <Box sx={{ pt: 0.4, paddingInline: 0.5 }}>
                <img src={Linkedin} width={30} height={30} />
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={FooterBuidingsRemoveBG}
              alt="footer"
              width="80%"
              height="350"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
