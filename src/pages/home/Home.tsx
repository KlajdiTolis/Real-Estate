import * as React from "react";
import {
  Stack,
  Autocomplete,
  TextField,
  Slider,
  Button,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

//import components
import Loan from "./Loan";
import CardBuy from "./CardBuy";
import CardSell from "./CardSell";
import CardRent from "./CardRent";
import Footer from "../../layout/Footer";
import Filters from "./components/Filters";
import Favorites from "./components/Favorites";

//import Image
import BGremoveLogo from "../../assets/buildings-removebg-preview.png";
import HomeBg from "../../assets/homeImage/homebg4.jpg";
import BgLogin from "../../assets/whitebg2.jpg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Home = () => {
  const [optionVal, setOptionVal] = React.useState<string>("");
  const [firstVal, setFirstVal] = React.useState<number>(0);
  const [secondVal, setSecondVal] = React.useState<any>(3000);
  const [value, setValue] = React.useState<any[]>([]);

  React.useEffect(() => {
    setValue([firstVal, secondVal]);
  }, [firstVal, secondVal]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const bigScreen = useMediaQuery({
    query: "(min-width: 1500px)",
  });

  const phone = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const minHeight = useMediaQuery({
    query: "(min-height: 700px)",
  });

  console.log(optionVal);
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgLogin})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${HomeBg})`,
          pt: bigScreen ? 5 : 0,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: 10,
          // borderBottomRightRadius: bigScreen ? 250 : (phone ? 0 : 150),
          // borderBottomLeftRadius: bigScreen ? 250 : (phone ? 0 : 150),
          height: bigScreen ? "43vh" : "45vh",
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={BGremoveLogo}
              width={bigScreen ? 120 : 100}
              height={bigScreen ? 100 : 80}
            />
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
              fontSize: bigScreen ? 40 : 35,
            }}
          >
            Find Your Dream House
          </Typography>
          <Box>
            <Filters />
          </Box>
        </Container>
      </Box>
      <Grid
        container
        sx={{
          pt: 8,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ paddingInline: bigScreen ? 25 : phone ? 5 : 14 }}
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
        <Grid
          item
          md={12}
          sx={{ pt: 6, pb: 8 }}
        >
          <Favorites />
        </Grid>
        <Grid
          item
          md={12}
          sx={{ paddingInline: bigScreen ? 35 : phone ? 0 : 5, pt: 6, pb: 8 }}
        >
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
