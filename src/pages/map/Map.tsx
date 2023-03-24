import { memo, useMemo, useState, useCallback, FC, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Autocomplete,
  InfoBox,
  InfoWindowF,
} from "@react-google-maps/api";
import { Grid, Box } from "@mui/material";

import Places from "./SearchPlace";
import FiltersMap from "./FiltersMap";

type MarkerType = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

type LatLngLiteral = google.maps.LatLngLiteral;
type PanToHandler = (coords: LatLngLiteral) => void;

const positions: MarkerType[] = [
  { id: 0, name: "Tirana", lat: 41.3275, lng: 19.8187 },
  { id: 1, name: "Vlore", lat: 41.3353, lng: 19.818682 },
  { id: 2, name: "Vlorsdds", lat: 40.1501, lng: 19.8068 },
  { id: 3, name: "Vlodsadre", lat: 41.318432, lng: 19.801291 },
  { id: 4, name: "Vlordsddddde", lat: 41.329896, lng: 19.79288 },
];

const center = {
  lat: 41.3275,
  lng: 19.8187,
};

const Map = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [activeMarker, setActiveMarker] = useState<MarkerType | null>(null);
  const [infoWindow, setInfoWindow] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDpPgdrD1MiVVbGxQ5-O0_Sx3WxMK1vLOY",
    libraries: ["places"],
  });

  const mapRef = useRef<google.maps.Map>();

  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);

  const redirectTo: PanToHandler = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(13);
    }
  }, []);

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
          <Box sx={{ textAlign: "center", pt: 2 }}>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <FiltersMap panTo={redirectTo} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", height: "100vh", pt: 7 }}>
            {/* <button onClick={() => (map as any).panTo(selectedMarker)}>GOO</button> */}
            <GoogleMap
              zoom={13}
              center={center}
              mapContainerStyle={{ width: "100%", height: "80vh" }}
              options={{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                disableDefaultUI: false,
              }}
              // onLoad={(map: any) => setMap(map)}
              onLoad={onMapLoad}
            >
              {positions.map((marker: any) => (
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
                    <Box>dsadsds</Box>
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
