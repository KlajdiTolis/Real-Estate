import React, { FC, useState } from "react";
import {
  Autocomplete,
  TextField,
  Grid,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
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

interface Props {
  panTo: any;
  changeOptionInput: any;
}

const options = [
  {
    id: 0,
    name: "Buy",
  },
  // {
  //   id: 1,
  //   name: "Sell"
  // },
  {
    id: 2,
    name: "Rent",
  },
];

const PlacesAutocomplete: FC<Props> = ({ panTo, changeOptionInput }) => {
  const [optionVal, setOptionVal] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  console.log(maxPrice, "max");
  console.log(minPrice, "min");
  console.log(price, "price");

  return (
    <Grid container sx={{ bgcolor: "gray", p: 1 }}>
      <Grid
        item
        md={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Combobox
          onSelect={async (address: any) => {
            setValue(address, false);
            clearSuggestions();
            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
              panTo({ lat, lng });
              console.log(address, "dsadsads");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="combobox-input"
            placeholder="Search an address"
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
      <Grid item md={4} sx={{ display: "flex", justifyContent: "left", pb: 1 }}>
        <Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options as any}
            onChange={(event: any, value: any) => {
              setOptionVal(value.name);
              changeOptionInput(value.name.toLowerCase());
            }}
            getOptionLabel={(option: any) => option["name"]}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Options"
                variant="standard"
                size="small"
              />
            )}
          />
        </Box>
      </Grid>
      <Grid
        item
        md={4}
        sx={{ display: "flex", justifyContent: "left", pb: 1, pr: 3 }}
      >
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          variant="outlined"
        ></FormControl>
      </Grid>
    </Grid>
  );
};
export default PlacesAutocomplete;
