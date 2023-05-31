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
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/Firebase";
import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

import Places from "./SearchPlaceMap";
import ViewPost from "../posts/ViewPost";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PinHouse from "../../assets/pinLocation.jpg";

type MarkerType = {
  id: number;
  name: string;
  _lat: number;
  _long: number;
  tag: string;
};
interface Props {
  redirectTo: any;
  changeOptionInput: any;
  tagName: any;
  onMapLoad: any;
}

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
  const [activeMarker, setActiveMarker] = useState<any>(null);
  const [infoWindow, setInfoWindow] = useState(null);
  const [porpertyData, setPorpertyData] = useState<any>([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_MAP_API_KEY}`,
    libraries: ["places"],
  });

  const handleMarkerClick = (marker: any) => {
    setActiveMarker(marker);
  };

  const fetchData = async () => {
    const data = query(collection(db, "home"), orderBy("price"));
    const doc = await getDocs(data);
    setPorpertyData(
      doc.docs.map((docc: any) => ({
        ...docc.data(),
        id: docc.id,
      }))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const findCoordinatesOnClick = (event: any) => {
    let lat = event.latLng.lat(),
      lng = event.latLng.lng();
    console.log(lat, "lat");
    console.log(lng, "lng");
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: "flex", height: "90vh"}}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", height: "80vh" }}>
            {/* <button onClick={() => (map as any).panTo(selectedMarker)}>GOO</button> */}
            <GoogleMap
              zoom={13}
              center={center}
              mapContainerStyle={{
                width: "100%",
                height: "83vh",
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
              {porpertyData.map((pos: any) => (
                <Box sx={{ bgcolor: "red" }}>
                  <MarkerF
                    key={pos.id}
                    label={`${pos.price}k`}
                    // icon={{
                    //   url: PinHouse,
                    //   scaledSize: new window.google.maps.Size(30, 30),
                    // }}
                    position={{
                      lat: pos?.location?._lat,
                      lng: pos?.location?._long,
                    }}
                    onClick={() => {
                      handleMarkerClick(pos);
                    }}
                  />
                </Box>
              ))}
              {activeMarker && (
                <InfoWindowF
                  key={activeMarker.id}
                  position={{
                    lat: activeMarker.location._lat,
                    lng: activeMarker.location._long,
                  }}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <Box sx={{ p: 1 }}>
                    <Box sx={{ fontSize: 18, p: 1, fontWeight: "bold" }}>
                      {activeMarker.property_type}
                    </Box>
                    <Box sx={{ fontSize: 12, pl: 1, pb: 1 }}>
                      {activeMarker.desc}
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
