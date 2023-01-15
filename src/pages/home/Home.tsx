import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import Posts from "../posts/PostsCard";
import Map from "../map/Map";
import Loan from "./Loan";
import HomeCarousel from "./HomeCarousel";
import CardBuy from "./CardBuy";
import CardSell from "./CardSell";
import CardRent from "./CardRent";
import Footer from "../../layout/Footer";

//import Image
import House from "../../assets/realEstatebgImage.webp";
import Logo from "../../assets/real-estate-logo.png";
import Logo1 from "../../assets/KT.png";
import Logo123 from "../../assets/logo123.png";
import LogoBW from "../../assets/logoBW.png";
import { LinearProgress } from "@mui/material";

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
          backgroundImage: `url(${House})`,
          pt: 5,
          pb: 10,
          backgroundPosition: "top",
          borderBottomLeftRadius: 210,
          // borderBottomRightRadius: 210,
          boxShadow: 10,
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <img src={LogoBW} width={150} height={150} />
          </Box>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{
              pb: 2,
              fontFamily: "monospace",
              textShadow: "3px 3px #000000",
              color: "white",
            }}
          >
            Let's Work Together
          </Typography>
          {/* <Box sx={{ textAlign: "center", pb: 5 }}>
            <input
              style={{
                width: 350,
                height: 50,
                backgroundColor: "white",
                borderRadius: 10,
                paddingLeft: 25,
                opacity: "80%",
                fontFamily: "monospace",
              }}
              type="search"
              id="search"
              placeholder="Search..."
              required
            />
          </Box> */}
        </Container>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          // backgroundImage:
          //   "linear-gradient(to right, rgba(255, 0, 0, 0), #fefff2)",
          pt: 12,
        }}
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
        <Grid item md={12} sx={{ pt: 12 }}>
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
      <Box sx={{ pt: 10 }}></Box>
      {/* Footer */}
      <Footer />
      {/* </ThemeProvider> */}
    </Box>
  );
};
export default Home;
