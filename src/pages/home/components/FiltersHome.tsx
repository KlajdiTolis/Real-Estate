import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Autocomplete,
  TextField,
  Slider,
  Button,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

//components
import Search from "./Search";

//images
import BgLogin from "../../../assets/whitebg2.jpg";

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

const property = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "shop",
  },
  {
    id: 2,
    name: "apartament",
  },
];

function Filters() {
  const [optionVal, setOptionVal] = useState<string>("");
  const [firstVal, setFirstVal] = useState<number>(0);
  const [secondVal, setSecondVal] = useState<any>(3000);
  const [value, setValue] = useState<any[]>([]);

  useEffect(() => {
    setValue([firstVal, secondVal]);
  }, [firstVal, secondVal]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const bigScreen = useMediaQuery({
    query: "(min-width: 1500px)",
  });

  const phone = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const minWidth = useMediaQuery({
    query: "(min-height: 700px)",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        borderRadius: 15,
        bgcolor: "white",
      }}
    >
      <Box>
        <Search />
      </Box>
      <Box sx={{ pl: 3, pt: 1 }}>
        <Button variant="contained" sx={{ borderRadius: 5, bgcolor: "red" }}>
          Submit
        </Button>
      </Box>
      {/* <Stack
        direction="row"
        sx={{ p: 2, backgroundImage: `url(${BgLogin})`, borderRadius: 15 }}
      >
        <Box sx={{ textAlign: "center", pr: 6, pl: 2 }}>
          <Search />
        </Box>
        <Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options as any}
            onChange={(event: any, value: any) => {
              setOptionVal(value.name);
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
        <Box width={300} sx={{ pl: 6 }}>
          <Stack direction="column">
            <Slider
              sx={{ color: "#a66560" }}
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              disableSwap
              max={optionVal == "Rent" ? 5000 : 100000}
              min={optionVal == "Rent" ? 0 : 1000}
              step={optionVal == "Rent" ? 10 : 1000}
              // getAriaValueText={valuetext}
            />
          </Stack>
        </Box>
        <Box sx={{ pl: 6 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={property as any}
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
        <Box sx={{ pl: 3, pt: 1 }}>
          <Button variant="contained" sx={{ borderRadius: 5, bgcolor: "red" }}>
            Submit
          </Button>
        </Box>
      </Stack> */}
    </Box>
  );
}

export default Filters;
