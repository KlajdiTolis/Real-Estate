import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack, Autocomplete, TextField, Slider, Button } from "@mui/material";
import { useMediaQuery } from 'react-responsive'

//import components
import Posts from "../posts/PostsCard";
import Map from "../sell/MapSell";
import Loan from "./Loan";
import HomeCarousel from "./HomeCarousel";
import CardBuy from "./CardBuy";
import CardSell from "./CardSell";
import CardRent from "./CardRent";
import Footer from "../../layout/Footer";
import Search from "../home/components/Search"

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

const options = [{
  id: 0,
  name: "Buy"
},
// {
//   id: 1,
//   name: "Sell"
// },
{
  id: 2,
  name: "Rent"
},
]

const property = [{
  id: 0,
  name: "home"
},
{
  id: 1,
  name: "shop"
},
{
  id: 2,
  name: "apartament"
},
]

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
    query: '(min-width: 1500px)'
  })

  const phone = useMediaQuery({
    query: '(max-width: 700px)'
  })

  const minWidth = useMediaQuery({
    query: '(min-height: 700px)'
  })

  console.log(optionVal);
  return (
    <Box sx={{
      backgroundImage: `url(${BgLogin})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
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
          height: bigScreen ? "50vh" : "45vh"
        }}
      >
        <Container>
          {/* {phone && */}
          <Box sx={{ textAlign: "center" }}>
            <img src={BGremoveLogo} width={bigScreen ? 120 : 100} height={bigScreen ? 120 : 100} />
          </Box>
          {/* } */}
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
              fontSize: bigScreen ? 45 : 35,
            }}
          >
            Find Your Dream House
          </Typography>
          <Stack
            direction="row"
            sx={{ p: 3, backgroundImage: `url(${BgLogin})`, borderRadius: 15 }}>
            <Box sx={{ textAlign: "center", pr: 6, pl: 2 }}>
              <Search />
            </Box>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options as any}
                onChange={(event: any, value: any) => { setOptionVal(value.name) }}
                getOptionLabel={(option: any) => option['name']}
                sx={{ width: 180, bgcolor: "white" }}
                renderInput={(params) => <TextField {...params} label="Options" />}
              />
            </Box>
            <Box width={300} sx={{ pl: 6 }}>
              <Stack
                direction="column">
                <Slider
                  sx={{ color: "#a66560" }}
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  disableSwap
                  max={optionVal == "Rent" ? 5000 : 100000}
                  min={optionVal == "Rent" ? 0 : 1000}
                  step={optionVal == "Rent" ? 10 : 1000}
                // getAriaValueText={valuetext}
                />
                {/* <Box>
                  <TextField sx={{ width: 100, bgcolor: "white" }} label="First Price" variant="standard" onChange={(e: any) => { setFirstVal(e.target.value) }} />
                  <TextField sx={{ width: 100, ml: 6.5, bgcolor: "white" }} label="Second Price" variant="standard" onChange={(e: any) => { setSecondVal(e.target.value) }} />
                </Box> */}
              </Stack>
            </Box>
            <Box sx={{ pl: 6 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={property as any}
                getOptionLabel={(option: any) => option['name']}
                sx={{ width: 180, }}
                renderInput={(params) => <TextField {...params} label="Propety Type" />}
              />
            </Box>
            <Box sx={{ pl: 3, pt: 1 }}>
              <Button variant="contained" sx={{ borderRadius: 5, bgcolor: "red", }}>
                Submit
              </Button>
            </Box>
          </Stack>
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
          sx={{ paddingInline: bigScreen ? 25 : (phone ? 5 : 14) }}
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
        <Grid item md={12} sx={{ paddingInline: bigScreen ? 40 : (phone ? 0 : 5), pt: 6, pb: 8 }}>
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
