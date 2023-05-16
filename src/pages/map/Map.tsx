import { memo, useMemo, useState, useCallback, FC, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Autocomplete,
  InfoBox,
  InfoWindowF,
} from "@react-google-maps/api";
import { Grid, Box, Button } from "@mui/material";

import Places from "./SearchPlaceMap";
import ViewPost from "../posts/ViewPost";

type MarkerType = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  tag: string;
};

interface Props {
  redirectTo: any;
  changeOptionInput: any;
  tagName: any;
  onMapLoad: any;
}

const positions: MarkerType[] = [
  { id: 0, tag: "buy", name: "Tirana", lat: 41.3275, lng: 19.8187 },
  { id: 1, tag: "rent", name: "Vlore", lat: 41.3353, lng: 19.818682 },
  { id: 2, tag: "rent", name: "Rent house", lat: 40.1501, lng: 19.8068 },
  { id: 3, tag: "rent", name: "Rent house", lat: 41.318432, lng: 19.801291 },
  { id: 4, tag: "buy", name: "Vlordsddddde", lat: 41.329896, lng: 19.79288 },
  { id: 5, tag: "buy", name: "Tr", lat: 41.328778, lng: 19.834189 },
];

const center = {
  lat: 41.3275,
  lng: 19.8187,
};

const Map: FC<Props> = ({
  redirectTo,
  changeOptionInput,
  tagName,
  onMapLoad,
}) => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [activeMarker, setActiveMarker] = useState<MarkerType | null>(null);
  const [infoWindow, setInfoWindow] = useState(null);
  // const [tagName, setTagNme] = useState<string>("buy");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB-aazp6NSDLQLqF1Y3drDJ9ERBHMTPSbg",
    libraries: ["places"],
  });

  const handleMarkerClick = (marker: any) => {
    setActiveMarker(marker);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", height: "100vh" }}>
            {/* <button onClick={() => (map as any).panTo(selectedMarker)}>GOO</button> */}
            <GoogleMap
              zoom={13}
              center={center}
              mapContainerStyle={{
                width: "100%",
                height: "100vh",
                borderRadius: 10,
              }}
              options={{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                disableDefaultUI: false,
              }}
              // onLoad={(map: any) => setMap(map)}
              onLoad={onMapLoad}
            >
              {tagName == "all"
                ? positions.map((pos: any) => (
                    <MarkerF
                      key={pos.id}
                      position={{
                        lat: pos.lat,
                        lng: pos.lng,
                      }}
                      onClick={() => {
                        handleMarkerClick(pos);
                      }}
                    />
                  ))
                : positions
                    .filter((marker) => marker.tag.includes(`${tagName}`))
                    .map((marker: any) => (
                      <MarkerF
                        key={marker.id}
                        position={{
                          lat: marker.lat,
                          lng: marker.lng,
                        }}
                        onClick={() => {
                          handleMarkerClick(marker);
                        }}
                      />
                    ))}
              {activeMarker && (
                <InfoWindowF
                  key={activeMarker.id}
                  position={{
                    lat: activeMarker.lat,
                    lng: activeMarker.lng,
                  }}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <Box>
                    <Box sx={{ fontSize: 16 }}>{activeMarker.name}</Box>
                    <Box>
                      dsadsds dsadsdsdsadsds dsadsdsdsadsds dsadsdsdsadsds
                      dsadsds
                    </Box>
                    <Button>
                      <ViewPost />
                    </Button>
                  </Box>
                </InfoWindowF>
              )}
            </GoogleMap>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Map;
