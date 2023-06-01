import { useState, useCallback, useRef, useContext } from "react";
import { Box, Grid } from "@mui/material";
import React from "react";
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
  const [tagName, setTagNme] = useState<string>("all");

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
    setTagNme(data);
  };

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
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            mt: 8,
            zIndex: 2,
          }}
        >
          <SerachPlaces
            panTo={redirectTo}
            changeOptionInput={changeOptionInput}
            tagName={tagName}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            mt: 17,
            zIndex: 3,
          }}
        >
          <Map
            changeOptionInput={changeOptionInput}
            redirectTo={redirectTo}
            tagName={tagName}
            onMapLoad={onMapLoad}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            position: "relative",
            top: 0,
            bottom: 0,
            left: "67vw",
            right: 0,
            mt: 17,
          }}
        >
          <Post />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapPage;
