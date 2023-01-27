import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Button } from "@mui/material/";
import Typography from "@mui/material/Typography";

import HomeCarousel from "../home/HomeCarousel";

//import images
import LoanImg from "../../assets/real-estate-business-building-technology.webp";

const Loan = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={false}
        md={6}
        display={{ lg: "block" }}
        sx={{ position: "relative", textAlign: "center", top: 200 }}
      >
        <Typography
          sx={{
            fontSize: 22,
            pb: 3,
            fontWeight: "bold",
            fontFamily: "monospace",
            textShadow: "1px 0px #000000",
          }}
        >
          Need a home loan? Get pre-approved
        </Typography>
        <Typography sx={{ pb: 3, fontFamily: "monospace" }}>
          Find a lender who can offer competitive mortgage rates and help you
          with pre-approval.
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: 18,
            paddingBlock: 1,
            borderRadius: 3,
            mt: 2,
            mb: 24,
            boxShadow: 5,
            bgcolor: "#5a6360",
            color: "white",
            fontFamily: "monospace",
            fontWeight: "bold",
            textShadow: "3px 2px #000000"
          }}
        >
          Contact drejtorin
        </Button>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        display={{ lg: "block" }}
        sx={{ pt: 10, p: 10 }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            boxShadow: 10,
          }}
        >
          <HomeCarousel />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Loan;
