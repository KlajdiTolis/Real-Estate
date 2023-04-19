import * as React from "react";
import {
  Stack,
  Autocomplete,
  TextField,
  // Slider,
  Button,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Imgix from "react-imgix";
import { useMediaQuery } from "react-responsive";

//import components
import Loan from "./Loan";
import CardBuy from "./CardBuy";
import CardSell from "./CardSell";
import CardRent from "./CardRent";
import Footer from "../../layout/Footer";
import Filters from "./components/FiltersHome";
// import Favorites from "./components/Favorites";
import Slider from "./components/SlickSlider/SlickSlider";

//import Image
import BGremoveLogo from "../../assets/buildings-removebg-preview.png";
import HomeBg from "../../assets/real-estate2.jpg";
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
          // backgroundColor: "#87a194",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundImage: `url(${HomeBg})`,
          height: bigScreen ? 390 : 280,
          borderBottomLeftRadius: bigScreen ? "50% 75%" : "",
          borderBottomRightRadius: bigScreen ? "50% 75%" : "",
          backgroundColor: "rgba(135, 161, 148, 0.7)",
          boxShadow: 10,
        }}
      >
        <Container>
          {/* <Box sx={{ textAlign: "center" }}>
            <img
              src={BGremoveLogo}
              width={bigScreen ? 120 : 100}
              height={bigScreen ? 100 : 80}
            />
          </Box> */}
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
              pt: 8,
              fontSize: bigScreen ? 40 : 35,
            }}
          >
            Find Your Dream House
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
            <Filters />
          </Box>
          {/* <Box sx={{ display: "flex", justifyContent: "center", pt: 10 }}>
            <Slider />
          </Box> */}
        </Container>
      </Box>
      <Grid
        container
        sx={{
          pt: 6,
          // bgcolor: "red",
        }}
      >
        {/* <Grid
          item
          md={12}
          sx={{
            // bgcolor: "rgb(175, 199, 185,0.3)",
            mb: 7,
            borderRadius: 40,
            pb: 3,
            pt: 3,
            paddingInline:30
          }}
        >
          <Slider />
        </Grid> */}
        <Grid
          container
          spacing={3}
          sx={{
            paddingInline: bigScreen ? 25 : phone ? 5 : 14,
            // bgcolor: "rgb(199, 199, 199,0.2)",
            pb: 3,
            borderRadius: 40,
            marginInline: 1,
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
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            paddingInline: bigScreen ? 35 : phone ? 0 : 5,
            // bgcolor: "rgb(199, 199, 199,0.2)",
            mt: 4,
            mb: 4,
            borderRadius: 40,
            ml: 1,
            mr: 1,
          }}
        >
          <Loan />
        </Grid>
      </Grid>
      <Box sx={{ pt: 0, pb: 2 }}></Box>
      <Footer />
    </Box>
  );
};
export default Home;
