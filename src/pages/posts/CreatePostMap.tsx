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

interface Prop {
  latData: any;
  lngData: any;
}

const center = {
  lat: 41.3275,
  lng: 19.8187,
};

const Map: FC<Prop> = ({ latData, lngData }) => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB-aazp6NSDLQLqF1Y3drDJ9ERBHMTPSbg",
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const findCoordinatesOnClick = (event: any) => {
    let lat = event.latLng.lat(),
      lng = event.latLng.lng();
    latData(lat);
    lngData(lng);
  };

  return (
    <Box sx={{ display: "flex", height: "80vh" }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", height: "80vh" }}>
            {/* <button onClick={() => (map as any).panTo(selectedMarker)}>GOO</button> */}
            <GoogleMap
              zoom={13}
              center={center}
              mapContainerStyle={{
                width: "100%",
                height: "85vh",
                borderRadius: 10,
              }}
              options={{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                disableDefaultUI: false,
              }}
              onClick={(e) => findCoordinatesOnClick(e)}
              // onLoad={(map: any) => setMap(map)}
              //   onLoad={onMapLoad}
            ></GoogleMap>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Map;
