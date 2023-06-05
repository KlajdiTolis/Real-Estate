import { useState, useCallback, useRef, useContext } from "react";
import { Box, Grid } from "@mui/material";
import { useMediaQuery } from "react-responsive";

//components
import ApppBar from "../../layout/AppBar";
import Map from "./Map";
import Post from "../posts/PostsCard";
import SerachPlaces from "./SearchPlaceMap";

//import Images
import BgLogin from "../../assets/whitebg2.jpg";

type MarkerType = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  tag: string;
};

type LatLngLiteral = google.maps.LatLngLiteral;
type PanToHandler = (coords: LatLngLiteral) => void;

const MapPage = () => {
  const [propStatus, setPropStatus] = useState<string>("");
  const [propType, setPropType] = useState<string>("");
  const [startPrice, setStartPrice] = useState<number>();
  const [endPrice, setEndPrice] = useState<number>();
  // const [propType, setPropType] = useState<string>("Buy");

  const mapRef = useRef<google.maps.Map>();

  const redirectTo: PanToHandler = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(13);
    }
  }, []);

  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);

  const changeOptionInput = (data: any) => {
    setPropStatus(data);
  };
  const changePropType = (data: any) => {
    setPropType(data);
  };

   const changeStartTime = (data: any) => {
    setStartPrice(data);
  };

  const changeEndTime = (data: any) => {
    setEndPrice(data);
  };

  const bigScreen = useMediaQuery({
    query: "(min-width: 1500px)",
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${BgLogin})`,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <ApppBar />
      </Box>
      {/* position fixed per ta bere faqen statike */}
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            position: "relative",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            mt: 8.7,
            zIndex: 4,
          }}
        >
          <SerachPlaces
            panTo={redirectTo}
            changeOptionInput={changeOptionInput}
            propStatus={propStatus}
            propType={propType}
            changePropType={changePropType}
            changeStartTime={changeStartTime}
            changeEndTime={changeEndTime}
            endPrice={endPrice}
            startPrice={startPrice}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={bigScreen ? 7 : 6}
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 1,
            right: 0,
            mt: 17.9,
            zIndex: 3,
          }}
        >
          <Map
            changeOptionInput={changeOptionInput}
            redirectTo={redirectTo}
            propStatus={propStatus}
            onMapLoad={onMapLoad}
            propType={propType}
            changePropType={changePropType}
            changeStartTime={changeStartTime}
            changeEndTime={changeEndTime}
            endPrice={endPrice}
            startPrice={startPrice}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={bigScreen ? 5 : 6}
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: bigScreen ? "58.5vw" : "50vw",
            right: 0,
            mt: 17.9,
            zIndex: 2,
          }}
        >
          <Post />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapPage;
