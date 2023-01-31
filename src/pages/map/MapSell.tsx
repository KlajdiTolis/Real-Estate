import { memo, useMemo, useState, useCallback, FC } from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, useLoadScript, MarkerF, Autocomplete } from '@react-google-maps/api'
import { Grid, Box } from "@mui/material"

import Places from "./Place"

// interface Props {
//   lat: any,
//   lng: any
// }

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

  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [search, setSearch] = useState("")
  const [selectedMarker, SetSelectedMarker] = useState("")
  const [selected, setSelected] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDpPgdrD1MiVVbGxQ5-O0_Sx3WxMK1vLOY",
    libraries: ['places']
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  console.log(selected)

  return (
    <Box sx={{ display: "flex", height: "100vh", }}>
      <Box sx={{ width: "100%", height: "100vh", pt: 10, pl: 5, pb: 5 }}>
        <div className="places-container">
          <Places setSelected={setSelected} />
        </div>

        {/* <button onClick={() => (map as any).panTo(selectedMarker)}>GOO</button> */}
        <GoogleMap zoom={13} center={center} mapContainerStyle={{ width: "100%", height: "80vh", borderRadius: 30 }}
          options={{
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            disableDefaultUI: false,
          }}
          onLoad={(map: any) => setMap(map)}
        >
          <Box sx={{ textAlign: "center", pt: 2 }}>
            {/* <Autocomplete>
              <input style={{ width: 300, height: 40, backgroundColor: "white", position: "relative", zIndex: 1, borderRadius: 10, paddingLeft: 35, backgroundImage: `url(${"https://static.thenounproject.com/png/101791-200.png"})`, backgroundSize: "30px", backgroundRepeat: "no-repeat", }}
                type="search" id="search" placeholder="Search..." required onChange={(e) => setSearch(e.target.value)} value={search} />
            </Autocomplete> */}
          </Box>
          {selected && <MarkerF position={selected} />}
          {/* {positions?.map((marker: any) => (
            <MarkerF position={marker.location} onClick={() => SetSelectedMarker(marker.location)} />
          ))} */}
        </GoogleMap>
      </Box>
    </Box >
  )
}
export default Map;