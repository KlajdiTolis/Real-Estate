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

const buy = [
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
];

const rent = [
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
];

const PlacesAutocomplete: FC<Props> = ({ panTo, changeOptionInput }) => {
  const [optionVal, setOptionVal] = useState<string>("");

  console.log(optionVal);

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
        borderRadius: 3,
        // borderTop: 1,
        // borderLeft: 2,
        // borderRight: 2,
        borderBottom: 2,
        borderColor: "#7a0000",
        // mt: 0.2,
        // mb: 0.2,
      }}
    >
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
      <Grid
        item
        md={4}
        sx={{ display: "flex", justifyContent: "center", pb: 2 }}
      >
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
        sx={{ display: "flex", justifyContent: "center", pb: 2 }}
      >
        {optionVal == "Buy" ? (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={buy as any}
            onChange={(event: any, value: any) => {
              setOptionVal(value.price);
              changeOptionInput(value.price.toLowerCase());
            }}
            getOptionLabel={(buy: any) => buy["price"]}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Price Range"
                variant="standard"
                size="small"
              />
            )}
          />
        ) : (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rent as any}
            onChange={(event: any, value: any) => {
              setOptionVal(value.price);
              changeOptionInput(value.price.toLowerCase());
            }}
            getOptionLabel={(rent: any) => rent["price"]}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Price Range"
                variant="standard"
                size="small"
              />
            )}
          />
        )}
      </Grid>
    </Grid>
  );
};
export default PlacesAutocomplete;
