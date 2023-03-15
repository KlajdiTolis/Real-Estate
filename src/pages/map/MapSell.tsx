import { memo, useMemo, useState, useCallback, FC } from 'react'
import { GoogleMap, useLoadScript, MarkerF, Autocomplete, InfoBox } from '@react-google-maps/api'
import { Grid, Box } from "@mui/material"

import Places from "./Place"
interface Props {
  lat: any,
  lng: any
}

const positions = [{ name: "Tirana", location: { lat: 41.3275, lng: 19.8187 } }, { name: "Vlore", location: { lat: 41.335300, lng: 19.818682 } }, { name: "Vlorsdds", location: { lat: 40.1501, lng: 19.8068 } }, { name: "Vlodsadre", location: { lat: 41.318432, lng: 19.801291 } }, { name: "Vlordsddddde", location: { lat: 41.329896, lng: 19.792880 } }]

const center = {
  lat: 41.3275,
  lng: 19.8187,
}

const ccenter = {
  lat: 41.335300,
  lng: 19.818682,
}

const center1 = {
  lat: 40.1501,
  lng: 19.8068,
}

const Map = () => {
  // const Map:FC<Props> = ({ lat, lng }) => {

  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [search, setSearch] = useState("")
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selected, setSelected] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDpPgdrD1MiVVbGxQ5-O0_Sx3WxMK1vLOY",
    libraries: ['places']
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  // const panTo = useCallback(() => {
  // }, [])

  // console.log(lat)

  return (
    <Box sx={{ display: "flex", height: "100vh", }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box>Filters</Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", height: "100vh", pt: 10 }}>
            {/* <button onClick={() => (map as any).panTo(selectedMarker)}>GOO</button> */}
            <GoogleMap zoom={13} center={center} mapContainerStyle={{ width: "100%", height: "80vh", }}
              options={{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                disableDefaultUI: false,
              }}
              onLoad={(map: any) => setMap(map)}
            >
              <MarkerF position={center1}>

              </MarkerF>
              <Box sx={{ textAlign: "center", pt: 2 }}>
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Places setSelected={setSelected} />
                </Box>
              </Box>
              {selected && <MarkerF position={selected} />}
              {/* {positions?.map((marker: any) => (
            <MarkerF position={marker.location} onClick={() => SetSelectedMarker(marker.location)} />
          ))}  */}
            </GoogleMap>
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}
export default Map;