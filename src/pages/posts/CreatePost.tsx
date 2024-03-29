import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Autocomplete,
  InputAdornment,
  Divider,
  Typography,
} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { v4 as uuidv4 } from "uuid";

//import comp
import CreatePostMap from "./PostMap";
import ApppBar from "../../layout/AppBar";

const propertyType = [
  { label: "House", id: 0 },
  { label: "Shop", id: 1 },
  { label: "Apartament", id: 2 },
];

const options = [
  { label: "Buy", id: 0 },
  { label: "Sell", id: 1 },
  { label: "Rent", id: 2 },
];

const Create = () => {
  const navigate = useNavigate();

  const [propName, setPropName] = useState<string>();
  const [propType, setPropType] = useState<string>();
  const [type, setType] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [lat, setLat] = useState<any>();
  const [lng, setLng] = useState<any>();

  const addData = async () => {
    await addDoc(collection(db, "home"), {
      porperty_name: propName,
      desc: desc,
      location: { _lat: lat, _long: lng },
      price: price,
      property_type: propType,
      type: type,
      id: uuidv4(),
    });
    navigate("/buy");
  };

  const latData = (data: any) => {
    setLat(data);
  };

  const lngData = (data: any) => {
    setLng(data);
  };

  const bigScreen = useMediaQuery({
    query: "(max-width: 900px)",
  });

  return (
    <>
      <Grid container spacing={0}>
        <ApppBar />
        <Grid item md={12} xs={12}>
          <Box
            sx={{
              mt: 2,
              pl: 7,
              pb: 1,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Create New Property
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sx={{ height: "90vh" }}>
          <form onSubmit={addData}>
            <Grid container spacing={4} sx={{ pt: 3, pl: 7, pb: 5 }}>
              <Grid item md={3} xs={12}>
                <TextField
                  id="standard-basic"
                  label="Property Name"
                  variant="outlined"
                  placeholder="Enter Property Name"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e: any) => {
                    setPropName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={4} xs={9}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={propertyType}
                  getOptionLabel={(option: any) => option["label"]}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  onChange={(event: any, value: any) =>
                    setPropType(value.label)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Property Type"
                      placeholder="Enter Property Type"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item md={4} xs={9}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  getOptionLabel={(option: any) => option["label"]}
                  onChange={(event: any, value: any) => setType(value.label)}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Type"
                      placeholder="Enter Type"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item md={9} xs={11}>
                <TextField
                  id="standard-basic"
                  label="Description"
                  variant="outlined"
                  placeholder="Enter Description"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e: any) => {
                    setDesc(e.target.value);
                  }}
                  // sx={{ m: 2 }}
                  fullWidth
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item md={4} xs={6.5}>
                <TextField
                  id="price"
                  label="Price*"
                  placeholder="Enter Price"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e: any) => {
                    setPrice(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment style={{ marginTop: 3 }} position="end">
                        €
                      </InputAdornment>
                    ),
                  }}
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={3} xs={9}>
                <TextField
                  id="standard-basic"
                  label="Lat"
                  variant="outlined"
                  value={lat}
                  placeholder="Enter Lat"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e: any) => {
                    setLat(e.target.value);
                  }}
                  // sx={{ m: 2 }}
                />
              </Grid>
              <Grid item md={3} xs={9}>
                <TextField
                  id="standard-basic"
                  label="Lng"
                  variant="outlined"
                  value={lng}
                  placeholder="Enter Lng"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e: any) => {
                    setLng(e.target.value);
                  }}
                  // sx={{ m: 2 }}
                />
              </Grid>
              <Grid item md={9} xs={9}>
                <Divider variant="middle" sx={{ bgcolor: "black" }} />
                <Button
                  variant="contained"
                  color="success"
                  sx={{ p: 1, mt: 3, bgcolor: "#335959", pl: 2, pr: 2 }}
                  onClick={addData}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{ height: "80vh", mt: bigScreen ? 8 : 0 }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: 20,
              pb: 3,
            }}
          >
            {bigScreen ? "Find Your Property Location" : ""}
          </Typography>
          <CreatePostMap lngData={lngData} latData={latData} />
        </Grid>
      </Grid>
    </>
  );
};

export default Create;
