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
  tagName: any;
}

const options = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Buy",
  },
  {
    id: 2,
    name: "Rent",
  },
];

const prices = [
  {
    type: "buy",
    buy: [
      {
        id: 0,
        price: "10000-20000",
      },
      {
        id: 1,
        price: "20000-30000",
      },
      {
        id: 2,
        price: "30000-40000",
      },
      {
        id: 3,
        price: "50000-60000",
      },
      {
        id: 4,
        price: "60000-70000",
      },
      {
        id: 5,
        price: "70000-80000",
      },
      {
        id: 6,
        price: "80000-90000",
      },
      {
        id: 7,
        price: "90000-100000",
      },
      {
        id: 8,
        price: "More than 100000",
      },
    ],
  },
  {
    type: "rent",
    rent: [
      {
        id: 0,
        price: "100-200",
      },
      {
        id: 1,
        price: "200-300",
      },
      {
        id: 2,
        price: "300-400",
      },
      {
        id: 3,
        price: "500-600",
      },
      {
        id: 4,
        price: "600-700",
      },
      {
        id: 5,
        price: "700-800",
      },
      {
        id: 6,
        price: "800-900",
      },
      {
        id: 7,
        price: "900-1000",
      },
      {
        id: 8,
        price: "More than 1000",
      },
    ],
  },
];

const property = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "Shop",
  },
  {
    id: 2,
    name: "Apartament",
  },
];

const PlacesAutocomplete: FC<Props> = ({
  panTo,
  changeOptionInput,
  tagName,
}) => {
  const [optionVal, setOptionVal] = useState<string>("");

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  return (
    <Grid
      container
      sx={{
        bgcolor: "#fcfcfc",
        pt: 1,
        // borderRadius: 3,
        borderBottom: 2,
        borderTop: 2,
        borderColor: "#7a0000",
      }}
    >
      <Grid
        item
        md={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              console.log(lat, lng, "address");
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
          <ComboboxPopover style={{ zIndex: 5 }}>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </Grid>
      <Grid
        item
        md={3}
        sx={{ display: "flex", justifyContent: "center", pb: 2 }}
      >
        <Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options as any}
            disableClearable={true}
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
        md={3}
        sx={{ display: "flex", justifyContent: "center", pb: 2 }}
      >
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={optionVal}
            label="Price"
            size="small"
            sx={{ minWidth: 180 }}
            onChange={(e: any) => {
              setOptionVal(e.target.value);
            }}
          >
            {/* {prices
              .filter((price) => price.type.includes(`${tagName}`))
              .map((prices: any) => (
                <MenuItem key={prices.rent.id} value={prices.rent.price}>
                  {prices.rent.price}
                </MenuItem>
              ))} */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={3}>
        <Box sx={{ pl: 6 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={property as any}
            disableClearable={true}
            getOptionLabel={(option: any) => option["name"]}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Propety Type"
                variant="standard"
                size="small"
              />
            )}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default PlacesAutocomplete;
