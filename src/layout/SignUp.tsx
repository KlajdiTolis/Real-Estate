import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/Firebase";

//import image
import Logo from "../assets/logoNoBg.png";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      alert("Please enter name");
    }
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        md={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            border: 2,
            width: 350,
            maxHeight: 600,
            borderColor: "#ababab",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "center", justifyContent: "center", pt: 4 }}>
            <img src={Logo} width={100} />
          </Box>
          <Typography sx={{ pb: 3, fontSize: 22 }}>Real Estate</Typography>
          <Box>
            <TextField
              size="small"
              label="Full Name"
              placeholder="Enter Name"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ pt: 2 }}>
            <TextField
              size="small"
              label="Email"
              placeholder="Enter Email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ pt: 2 }}>
            <TextField
              size="small"
              label="Password"
              placeholder="Enter Password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              type="password"
            />
          </Box>
          <Box
            sx={{ display: "center", justifyContent: "center", pt: 4, pb: 6 }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "#558381" }}
              onClick={register}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Grid>
      {/* <Grid item>
            </Grid> */}
    </Grid>
  );
};

export default SignUp;
