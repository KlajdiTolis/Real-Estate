import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Posts from "../posts/PostsCard";
import Map from "../map/MapSell";
import Loan from "./Loan";
import HomeCarousel from "./HomeCarousel";
import CardBuy from "./CardBuy";
import CardSell from "./CardSell";
import CardRent from "./CardRent";
import Footer from "../../layout/Footer";
import { useMediaQuery, Theme } from '@mui/material';

//import Image
import House from "../../assets/realEstatebgImage.webp";
import BGremoveLogo from "../../assets/buildings-removebg-preview.png"
import HomeBg from "../../assets/homeImage/homebg4.jpg"
import BgLogin from "../../assets/whitebg2.jpg"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Home = () => {

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${HomeBg})`,
          pt: 5,
          pb: 10,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: 10,
          height: "45vh"
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <img src={BGremoveLogo} width={120} height={120} />
          </Box>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{
              fontFamily: "monospace",
              textShadow: "3px 3px #000000",
              color: "white",
              pb: 1,
            }}
          >
            Find Your Dream House
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <input
              style={{
                width: 350,
                height: 50,
                backgroundColor: "white",
                borderRadius: 10,
                paddingLeft: 25,
                opacity: "60%",
                fontFamily: "monospace",
              }}
              type="search"
              id="search"
              placeholder="Search..."
              required
            />
          </Box>
        </Container>
      </Box>
      <Grid
        container
        sx={{
          backgroundImage: `url(${BgLogin})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          pt: 8,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ paddingInline: 30 }}
        >
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CardBuy />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CardSell />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CardRent />
          </Grid>
        </Grid>

        <Grid item md={12} sx={{ pt: 3, paddingInline: 10 }}>
          <Loan />
        </Grid>
        {/* <Grid item md={6} xs={12} sx={{pt:12}}>
                    <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                        <HomeCarousel />
                    </Box>
                </Grid>
                <Grid item md={5} xs={12} sx={{pt:12}}>
                    <Box sx={{ textAlign: "center", pt: 5, pl: 8, pr: 8 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Box>
                </Grid> */}
      </Grid>
      <Box sx={{ pt: 0, pb: 2 }}></Box>
      {/* Footer */}
      <Footer />
      {/* </ThemeProvider> */}
    </Box>
  );
};
export default Home;
