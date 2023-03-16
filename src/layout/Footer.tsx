import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

//image
import Facebook from "../assets/socialMedia/facebook.png"
import Insta from "../assets/socialMedia/instagram.png"
import Twitter from "../assets/socialMedia/twitter.png"
import Linkedin from "../assets/socialMedia/linkedin.png"
import RealEstateSketch from "../assets/footer/realEstateSketch.png"

//logo
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';

const Footer = () => {

  const bigScreen = useMediaQuery({
    query: '(min-width: 1300px)'
  })

  return (
    <Box
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundImage: "linear-gradient(to right, #988da8 , #87a194)",
        color: "white",
        textAlign: "center",
        height: bigScreen ? "30vh" : "35vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderTopLeftRadius: bigScreen ? "50% 30%" : " ",
        borderTopRightRadius: bigScreen ? "50% 25%" : " ",

      }}
    >
      <Grid container>
        {/* <Grid item md={3} sx={{ pt: 6, display: { xs: "none", md: "block" } }}>
          <Typography sx={{ fontSize: bigScreen ? 21 : 18, fontWeight: "bold", color: "Black", fontFamily: "monospace", fontStyle: "italic" }}> What we offer</Typography>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <Box sx={{ border: 1, pl: 3, borderRadius: 20, paddingBlock: 0.4, mt: 2, borderColor: "#8dc1e0" }}>
              <Link style={{ paddingRight: 24, color: "white", fontSize: bigScreen ? 17 : 14, fontWeight: "bold", fontFamily: "monospace", display: "flex", textDecoration: "none", textShadow: "2px 2px #000000" }} to='/buy'>Buy</Link>
            </Box>
            <Box sx={{ border: 1, pl: 3, borderRadius: 20, paddingBlock: 0.4, borderColor: "#8dc1e0" }}>
              <Link style={{ paddingRight: 24, color: "white", fontSize: bigScreen ? 17 : 14, fontWeight: "bold", fontFamily: "monospace", display: "flex", textDecoration: "none", textShadow: "2px 2px #000000" }} to='/sell'>Sell</Link>
            </Box>
            <Box sx={{ border: 1, pl: 3, borderRadius: 20, paddingBlock: 0.4, borderColor: "#8dc1e0" }}>
              <Link style={{ paddingRight: 24, color: "white", fontSize: bigScreen ? 17 : 14, fontWeight: "bold", fontFamily: "monospace", display: "flex", textDecoration: "none", textShadow: "2px 2px #000000" }} to='/rent'>Rent</Link>
            </Box>
          </Stack>
        </Grid> */}
        <Grid item md={1.5}>
        </Grid>
        <Grid item md={3} sx={{ pt: 4, display: { xs: "none", md: "block" } }} >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <Typography sx={{ fontSize: bigScreen ? 21 : 18, fontWeight: "bold", color: "black", fontFamily: "monospace", fontStyle: "italic", textShadow: "2px 2px #659469", }}> Short Discription</Typography>
            <Box>
              <img src={RealEstateSketch} width={bigScreen ? 140 : 110} />
            </Box>
            {
              bigScreen ?
                <Box sx={{ textAlign: "left", paddingInline: 5, pt: 1, fontSize: 13, color: "black", fontFamily: "monospace"  }}>
                  We are a Real Estate company that offer buy,sell and rent of your property,Here you can find your future property,can sell your actuale one or rent it with the best prices.
                </Box>
                :
                <Box sx={{ textAlign: "left", paddingInline: 5, pt: 1, fontSize: 13, color: "black" }}>
                  tronicsd asdsdsad asdsadsa dsadsaadsvdv sd sdfdsa dsadsad
                </Box>
            }
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} sx={{ pt: 4, }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <Typography sx={{ fontSize: bigScreen ? 21 : 18, fontWeight: "bold", color: "black", fontFamily: "monospace", fontStyle: "italic", textShadow: "2px 2px #659469" }}>Contact</Typography>
            <Box sx={{ textAlign: "left", paddingInline: 12, pt: 1, fontSize: 13, color: "black", fontWeight: "bold" }}>
              <Box>
                <LocationOnIcon sx={{ mr: 1 }} />
                Pallati me shigjeta, Kavaja Street, Tirana
              </Box >
              <Box sx={{ pt: 1 }}>
                <MailIcon sx={{ mr: 1 }} />
                Klajdi.tolis08@gmail.com
              </Box>
              <Box sx={{ pt: 1 }}>
                <LocalPhoneIcon sx={{ mr: 1 }} />
                +355 693350203
              </Box>
              <Box sx={{ pt: 1 }}>
                <InfoIcon sx={{ mr: 1 }} />
                Realestate@info.com
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid item md={3} sx={{ pt: 6, display: { xs: "none", md: "block" } }}>
          <Typography sx={{ fontSize: bigScreen ? 21 : 18, fontWeight: "bold", color: "Black", fontFamily: "monospace", fontStyle: "italic", pb: 3, textShadow: "2px 2px #8d7ea3" }}>Follow us</Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            {/* <Box sx={{ textAlign: "center", paddingInline: 10, fontSize: 13 }}> */}
            <Box>
              <img src={Facebook} width={30} height={30} />
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <img src={Insta} width={30} height={30} />
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <img src={Twitter} width={30} height={30} />
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <img src={Linkedin} width={30} height={30} />
            </Box>
            {/* </Box> */}
          </Stack>
        </Grid>
        <Grid item md={1.5}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
