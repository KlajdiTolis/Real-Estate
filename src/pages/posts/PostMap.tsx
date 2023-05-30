import {
  memo,
  useMemo,
  useState,
  useCallback,
  FC,
  useRef,
  useEffect,
} from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Autocomplete,
  InfoBox,
  InfoWindowF,
} from "@react-google-maps/api";
import { Grid, Box, Button } from "@mui/material";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

interface Prop {
  latData: any;
  lngData: any;
}

const center = {
  lat: 41.3275,
  lng: 19.8187,
};

type LatLngLiteral = google.maps.LatLngLiteral;
type PanToHandler = (coords: LatLngLiteral) => void;

const Map: FC<Prop> = ({ latData, lngData }) => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  // const [latt, setLatt] = useState<any>();
  // const [lngg, setLngg] = useState<any>();

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_MAP_API_KEY}`,
    libraries: ["places"],
  });

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({});

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

  const findCoordinatesOnClick = (event: any) => {
    let lat = event.latLng.lat(),
      lng = event.latLng.lng();
    // setLatt(lat);
    // setLngg(lng);
    latData(lat);
    lngData(lng);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ height: "80vh" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            position: "absolute",
            zIndex: 1,
            pt: 2,
            pl: 2,
            pb: 0.5,
          }}
        >
          <Combobox
            onSelect={async (address: any) => {
              setValue(address, false);
              clearSuggestions();
              try {
                const results = await getGeocode({ address });
                const { lat, lng } = await getLatLng(results[0]);
                redirectTo({ lat, lng });
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <ComboboxInput
              style={{
                padding: 5,
                paddingLeft: 10,
                paddingRight: 30,
                borderRadius: 15,
                // borderColor: "#adacac",
                opacity: 0.9,
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={!ready}
              className="combobox-input"
              placeholder="Search an address" ///
            />
            <ComboboxPopover style={{ zIndex: 1 }}>
              <ComboboxList>
                {status === "OK" &&
                  data.map(({ place_id, description }) => (
                    <ComboboxOption key={place_id} value={description} />
                  ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", height: "80vh" }}>
            {/* <button onClick={() => (map as any).panTo(selectedMarker)}>GOO</button> */}
            <GoogleMap
              zoom={13}
              center={center}
              mapContainerStyle={{
                width: "100%",
                height: "80vh",
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
              onLoad={onMapLoad}
            >
              {/* <MarkerF
                key={1}
                position={{
                  lat: latt,
                  lng: lngg,
                }}
              /> */}
            </GoogleMap>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Map;
