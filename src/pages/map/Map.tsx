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

  console.log(activeMarker, "activeMarkeractiveMarkeractiveMarker");

  const fetchData = async () => {
    const data = query(collection(db, "home"), orderBy("price"),);
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
    <Box sx={{ display: "flex", height: "90vh" }}>
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
                <MarkerF
                  key={pos.id}
                  label={`${pos.price}k`}
                  // icon={{
                  //   url: "data:image/png;base64,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",
                  //   scale: 13,
                  // }}
                  position={{
                    lat: pos?.location?._lat,
                    lng: pos?.location?._long,
                  }}
                  onClick={() => {
                    handleMarkerClick(pos);
                  }}
                />
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
